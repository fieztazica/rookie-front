import { Inject, Injectable } from '@nestjs/common';
import { CategoryCreateInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { PrismaService } from '../common/database/prisma.service';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createCategoryInput: CategoryCreateInput) {
    return this.prisma.category.create({ data: createCategoryInput });
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  findOne(id: string) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  update(id: string, updateCategoryInput: UpdateCategoryInput) {
    return this.prisma.category.update({
      where: { id },
      data: updateCategoryInput,
    });
  }

  remove(id: string) {
    return this.prisma.category.delete({ where: { id } });
  }
}
