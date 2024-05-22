import { Inject, Injectable } from '@nestjs/common';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions,
} from 'prisma-pagination';
import { PrismaService } from '../common/database/prisma.service';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from '@prisma/client';
import { FindManyCategoryArgs } from 'src/__generated__/category/find-many-category.args';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createCategoryInput: CreateCategoryInput): Promise<Category> {
    return this.prisma.category.create({ data: createCategoryInput });
  }

  findAll(options?: PaginateOptions): Promise<PaginatedResult<Category>> {
    const paginate = createPaginator(options);
    return paginate<Category, FindManyCategoryArgs>(this.prisma.category, {
      where: { deleted: { equals: false } },
    });
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
