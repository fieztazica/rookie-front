import { Inject, Injectable } from '@nestjs/common';
import { FindManyProductArgs, ProductPrisma } from '@repo/db';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions,
} from 'prisma-pagination';
import { PrismaService } from '../common/database/prisma.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createProductInput: CreateProductInput): Promise<ProductPrisma> {
    return this.prisma.product.create({ data: createProductInput });
  }

  findAll(
    options: PaginateOptions = {},
  ): Promise<PaginatedResult<ProductPrisma>> {
    const paginate = createPaginator(options);
    return paginate<ProductPrisma, FindManyProductArgs>(this.prisma.product, {
      where: { deleted: { equals: false } },
    });
  }

  findOne(id: string): Promise<ProductPrisma> {
    return this.prisma.product.findUnique({ where: { id, deleted: false } });
  }

  update(
    id: string,
    updateProductInput: UpdateProductInput,
  ): Promise<ProductPrisma> {
    return this.prisma.product.update({
      where: { id, deleted: false },
      data: updateProductInput,
    });
  }

  remove(id: string): Promise<ProductPrisma> {
    return this.prisma.product.update({
      where: { id, deleted: false },
      data: {
        deleted: true,
      },
    });
  }
}
