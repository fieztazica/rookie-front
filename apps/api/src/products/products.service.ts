import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Prisma, Product } from '@prisma/client';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import { differenceInDays, differenceInSeconds } from 'date-fns';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions,
} from 'prisma-pagination';
import { FeedbacksService } from 'src/feedbacks/feedbacks.service';
import { PrismaService } from '../common/database/prisma.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class ProductsService {
  cacheKey = 'products';
  // 7 days in milliseconds
  cacheTtl = 7 * 24 * 60 * 60 * 1000;
  private readonly logger = new Logger(ProductsService.name);
  isTesting: boolean;
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
    private readonly feedbacksService: FeedbacksService,
    private readonly configService: ConfigService,
    private readonly redisService: RedisService,
  ) {
    this.isTesting = this.configService.get('testing');
  }
  create(createProductInput: CreateProductInput): Promise<Product> {
    return this.prisma.product.create({ data: createProductInput });
  }

  findAll(
    options: Prisma.ProductFindManyArgs = {
      where: { deleted: false },
    },
  ) {
    return this.prisma.product.findMany(options);
  }

  paginatedFindAll(
    options: PaginateOptions = {
      page: 1,
      perPage: 10,
    },
  ): Promise<PaginatedResult<Product>> {
    const paginate = createPaginator(options);
    return paginate<Product, Prisma.ProductFindManyArgs>(this.prisma.product, {
      where: { deleted: false },
    });
  }

  async findOne(id: string, addView: number = 1) {
    let product = await this.redisService.hGetJson<Product>(this.cacheKey, id);

    // if product found in cache store
    if (product) {
      if (addView > 0) {
        product = { ...product, views: product.views + addView };
        await this.redisService.hSetJson(
          this.cacheKey,
          id,
          product,
          this.cacheTtl,
        );
      }
      return product;
    }

    product = await this.prisma.product.findUnique({
      where: { id, deleted: false },
    });

    if (product) {
      if (addView > 0) {
        product = { ...product, views: product.views + addView };
      }
      await this.redisService.hSetJson(
        this.cacheKey,
        id,
        product,
        this.cacheTtl,
      );
    }

    return product;
  }

  getProductFeedbacks(productId: string) {
    return this.feedbacksService.findAll({
      where: {
        productId: productId,
      },
    });
  }

  getProductOrderItems(productId: string) {
    return this.prisma.orderItem.findMany({
      where: {
        productId,
      },
      include: {
        order: true,
      },
    });
  }

  getProductCategories(productId: string) {
    return this.prisma.productToCategory.findMany({
      where: {
        productId,
      },
      include: {
        category: true,
      },
    });
  }

  getProductAuthors(productId: string) {
    return this.prisma.productToAuthor.findMany({
      where: {
        productId,
      },
      include: {
        author: true,
      },
    });
  }

  async getPopularProducts(take: number = 8) {
    const topProducts = await this.prisma.orderItem.groupBy({
      by: ['productId'],
      _count: {
        productId: true,
      },
      orderBy: {
        _count: {
          productId: 'desc',
        },
      },
      take,
    });

    const productIds = topProducts.map((item) => item.productId);
    const products = await this.prisma.product.findMany({
      where: {
        id: {
          in: productIds,
        },
        deleted: false,
      },
    });

    return products;
  }

  @Cron(
    process.env.NODE_ENV !== 'production'
      ? CronExpression.EVERY_5_MINUTES
      : CronExpression.EVERY_DAY_AT_MIDNIGHT,
  )
  async calculateProductsRatings() {
    this.logger.log('[TASK] calculating products ratings...');
    const products = await this.findAll({
      where: {
        deleted: false,
      },
      select: {
        id: true,
      },
    });
    let i = 0;
    for await (const product of products) {
      await this.calculateRatingsByProductId(product.id);
      i++;
    }
    this.logger.log(
      `[TASK] calculated products ratings ${i}/${products.length}`,
    );
  }

  @Cron(
    process.env.NODE_ENV !== 'production'
      ? CronExpression.EVERY_10_SECONDS
      : CronExpression.EVERY_HOUR,
  )
  async updateProductsViews() {
    this.logger.log('[TASK] Updating products views...');
    const products = await this.redisService.hGetAllJson<Product>(
      this.cacheKey,
    );
    const productsArray = Object.values(products);
    for await (const product of productsArray) {
      await this.update(product.id, {
        id: product.id,
        views: product.views,
      });
    }
    this.logger.log('[TASK] Updated products views...');
  }

  async calculateRatingsByProductId(productId: string, product?: Product) {
    if (product) {
      const diff = this.isTesting
        ? differenceInSeconds(new Date(), new Date(product.updatedAt))
        : differenceInDays(new Date(), new Date(product.updatedAt));

      if (diff < 7 && product.ratings > 0) return product.ratings;
    }
    const ratings =
      await this.feedbacksService.calculateProductRatingByProductId(productId);
    const { ratings: productRatings } = await this.update(productId, {
      id: productId,
      ratings: ratings.averageRatings,
    });
    this.logger.log(
      `triggered calculate ratings for ${productId}: ${productRatings}`,
    );
    return productRatings;
  }

  update(id: string, updateProductInput: UpdateProductInput): Promise<Product> {
    return this.prisma.product.update({
      where: { id, deleted: false },
      data: updateProductInput,
    });
  }

  remove(id: string): Promise<Product> {
    return this.prisma.product.update({
      where: { id, deleted: false },
      data: {
        deleted: true,
      },
    });
  }
}
