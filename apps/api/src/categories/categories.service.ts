import { Inject, Injectable } from '@nestjs/common';
import { CategoryPrisma, FindManyCategoryArgs } from '@repo/db';
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
  create(createCategoryInput: CreateCategoryInput): Promise<CategoryPrisma> {
    return this.prisma.category.create({ data: createCategoryInput });
  }

  findAll(options?: PaginateOptions): Promise<PaginatedResult<CategoryPrisma>> {
    const paginate = createPaginator(options);
    return paginate<CategoryPrisma, FindManyCategoryArgs>(
      this.prisma.category,
      {
        where: { deleted: { equals: false } },
      },
    );
  }

  findOne(id: string): Promise<CategoryPrisma> {
    return this.prisma.category.findUnique({ where: { id, deleted: false } });
  }

  update(
    id: string,
    updateCategoryInput: UpdateCategoryInput,
  ): Promise<CategoryPrisma> {
    return this.prisma.category.update({
      where: { id, deleted: false },
      data: updateCategoryInput,
    });
  }

  remove(id: string): Promise<CategoryPrisma> {
    return this.prisma.category.update({
      where: { id, deleted: false },
      data: {
        deleted: true,
      },
    });
  }
}
