import { Inject, Injectable } from '@nestjs/common';
import { Feedback, Prisma } from '@prisma/client';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions,
} from 'prisma-pagination';
import { cleanupObject } from 'src/common/utils/object';
import { RedisService } from 'src/redis/redis.service';
import { PrismaService } from '../common/database/prisma.service';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import {
  AllowedFeedbacksSortBy,
  FilterFeedbackInput,
} from './dto/filter-feedback.input';
import { UpdateFeedbackInput } from './dto/update-feedback.input';
import { ProductRating } from './entities/product-rating.entity';

@Injectable()
export class FeedbacksService {
  productRatingsCacheKey = 'productRatings';
  productRatingsCacheTTL = 60 * 60 * 24;

  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
    private readonly redisService: RedisService,
  ) {}
  create(createFeedbackInput: CreateFeedbackInput): Promise<Feedback> {
    return this.prisma.feedback.create({ data: createFeedbackInput });
  }

  findAll(
    options: Prisma.FeedbackFindManyArgs = {
      where: { deleted: false },
    },
  ) {
    return this.prisma.feedback.findMany(options);
  }
  paginatedFindAll(
    options: PaginateOptions = { page: 1, perPage: 10 },
  ): Promise<PaginatedResult<Feedback>> {
    const paginate = createPaginator(options);
    return paginate<Feedback, Prisma.FeedbackFindManyArgs>(
      this.prisma.feedback,
      {
        where: { deleted: false },
      },
    );
  }

  paginatedFindAllByProductId(
    productId: string,
    options: PaginateOptions = { page: 1, perPage: 10 },
    filters: FilterFeedbackInput = {
      sortBy: AllowedFeedbacksSortBy.LATEST,
      star: 5,
    },
  ): Promise<PaginatedResult<Feedback>> {
    const additionalQuery = cleanupObject({
      orderBy: {
        createdAt:
          filters.sortBy === AllowedFeedbacksSortBy.OLDEST
            ? 'asc'
            : filters.sortBy === AllowedFeedbacksSortBy.LATEST
              ? 'desc'
              : undefined,
        product: {
          salePrice:
            filters.sortBy === AllowedFeedbacksSortBy.ONSALE
              ? 'asc'
              : undefined,
        },
      },
      include: {
        product: {
          select: {
            salePrice:
              filters.sortBy === AllowedFeedbacksSortBy.ONSALE
                ? true
                : undefined,
          },
        },
      },
    });
    const paginate = createPaginator(options);
    return paginate<Feedback, Prisma.FeedbackFindManyArgs>(
      this.prisma.feedback,
      {
        where: { productId, deleted: false, rating: filters.star },
        ...additionalQuery,
      },
    );
  }

  findOne(id: string): Promise<Feedback> {
    return this.prisma.feedback.findUnique({ where: { id, deleted: false } });
  }

  async calculateRatingByProductId(productId: string): Promise<ProductRating> {
    const cachedProductRating = await this.redisService.hGetJson<ProductRating>(
      this.productRatingsCacheKey,
      productId,
    );
    if (cachedProductRating) return cachedProductRating;
    const ratings = {
      five: await this.prisma.feedback.count({
        where: { productId, deleted: false, rating: 5 },
      }),
      four: await this.prisma.feedback.count({
        where: { productId, deleted: false, rating: 4 },
      }),
      three: await this.prisma.feedback.count({
        where: { productId, deleted: false, rating: 3 },
      }),
      two: await this.prisma.feedback.count({
        where: { productId, deleted: false, rating: 2 },
      }),
      one: await this.prisma.feedback.count({
        where: { productId, deleted: false, rating: 1 },
      }),
    };

    const totalRatings =
      ratings['one'] +
      ratings['two'] +
      ratings['three'] +
      ratings['four'] +
      ratings['five'];

    const averageRatings =
      (1 * ratings['one'] +
        2 * ratings['two'] +
        3 * ratings['three'] +
        4 * ratings['four'] +
        5 * ratings['five']) /
      Math.max(totalRatings, 1);

    const calculatedProductRating: ProductRating = {
      ratings,
      totalRatings,
      averageRatings,
    };

    await this.redisService.hSetJson(
      this.productRatingsCacheKey,
      productId,
      calculatedProductRating,
      this.productRatingsCacheTTL,
    );

    return calculatedProductRating;
  }

  update(
    id: string,
    updateFeedbackInput: UpdateFeedbackInput,
  ): Promise<Feedback> {
    return this.prisma.feedback.update({
      where: { id, deleted: false },
      data: updateFeedbackInput,
    });
  }

  remove(id: string): Promise<Feedback> {
    return this.prisma.feedback.update({
      where: { id, deleted: false },
      data: {
        deleted: true,
      },
    });
  }
}
