import { Inject, Injectable } from '@nestjs/common';
import { Feedback, Prisma } from '@prisma/client';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions,
} from 'prisma-pagination';
import { PrismaService } from '../common/database/prisma.service';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { UpdateFeedbackInput } from './dto/update-feedback.input';
import { ProductRating } from './entities/product-rating.entity';

@Injectable()
export class FeedbacksService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
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
  ): Promise<PaginatedResult<Feedback>> {
    const paginate = createPaginator(options);
    return paginate<Feedback, Prisma.FeedbackFindManyArgs>(
      this.prisma.feedback,
      {
        where: { productId, deleted: false },
      },
    );
  }

  findOne(id: string): Promise<Feedback> {
    return this.prisma.feedback.findUnique({ where: { id, deleted: false } });
  }

  async calculateRatingByProductId(productId: string): Promise<ProductRating> {
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

    return { ratings, totalRatings, averageRatings };
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
