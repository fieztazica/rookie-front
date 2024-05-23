import { Inject, Injectable } from '@nestjs/common';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions,
} from 'prisma-pagination';
import { PrismaService } from '../common/database/prisma.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Prisma, Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createProductInput: CreateProductInput): Promise<Product> {
    return this.prisma.product.create({ data: createProductInput });
  }

  findAll(options: PaginateOptions = {}): Promise<PaginatedResult<Product>> {
    const paginate = createPaginator(options);
    return paginate<Product, Prisma.ProductFindManyArgs>(this.prisma.product, {
      where: { deleted: { equals: false } },
      include: { authors: { include: { author: true } } },
    });
  }

  findOne(id: string): Promise<Product> {
    return this.prisma.product.findUnique({
      where: { id, deleted: false },
      include: { authors: { include: { author: true } } },
    });
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
