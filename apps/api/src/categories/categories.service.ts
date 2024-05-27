import { Inject, Injectable } from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions,
} from 'prisma-pagination';
import { PrismaService } from '../common/database/prisma.service';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createCategoryInput: CreateCategoryInput): Promise<Category> {
    return this.prisma.category.create({ data: createCategoryInput });
  }

  findAll(
    options: Prisma.CategoryFindManyArgs = {
      where: { deleted: { equals: false } },
    },
  ) {
    return this.prisma.category.findMany(options);
  }

  paginatedFindAll(
    options: PaginateOptions = {
      page: 1,
      perPage: 10,
    },
  ): Promise<PaginatedResult<Category>> {
    const paginate = createPaginator(options);
    return paginate<Category, Prisma.CategoryFindManyArgs>(
      this.prisma.category,
      {
        where: { deleted: { equals: false } },
      },
    );
  }

  findOne(id: string): Promise<Category> {
    return this.prisma.category.findUnique({ where: { id, deleted: false } });
  }

  update(
    id: string,
    updateCategoryInput: UpdateCategoryInput,
  ): Promise<Category> {
    return this.prisma.category.update({
      where: { id, deleted: false },
      data: updateCategoryInput,
    });
  }

  remove(id: string): Promise<Category> {
    return this.prisma.category.update({
      where: { id, deleted: false },
      data: {
        deleted: true,
      },
    });
  }
}
