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

@Injectable()
export class ProductsService {
  private readonly logger = new Logger(ProductsService.name);
  isTesting: boolean;
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
    private readonly feedbacksService: FeedbacksService,
    private readonly configService: ConfigService,
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

  findOne(id: string): Promise<Product> {
    return this.prisma.product.findUnique({
      where: { id, deleted: false },
    });
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

  @Cron(
    process.env.NODE_ENV !== 'production'
      ? CronExpression.EVERY_MINUTE
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
      `triggered calculate ratings for `,
      productId,
      productRatings,
      new Date(),
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
