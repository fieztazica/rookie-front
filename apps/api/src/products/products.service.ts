import { Inject, Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import { PrismaService } from '../common/database/prisma.service';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createProductInput: CreateProductInput) {
    return this.prisma.product.create({ data: createProductInput });
  }

  findAll() {
    return this.prisma.product.findMany({ where: { deleted: false } });
  }

  findOne(id: string) {
    return this.prisma.product.findUnique({ where: { id, deleted: false } });
  }

  update(id: string, updateProductInput: UpdateProductInput) {
    return this.prisma.product.update({
      where: { id, deleted: false },
      data: updateProductInput,
    });
  }

  remove(id: string) {
    return this.prisma.product.update({
      where: { id, deleted: false },
      data: {
        deleted: true,
      },
    });
  }
}
