import { Inject, Injectable } from '@nestjs/common';
import { Author, Prisma } from '@prisma/client';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions,
} from 'prisma-pagination';
import { PrismaService } from 'src/common/database/prisma.service';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';

@Injectable()
export class AuthorsService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}

  create(createAuthorInput: CreateAuthorInput) {
    return this.prisma.author.create({ data: createAuthorInput });
  }

  findAll(
    options: Prisma.AuthorFindManyArgs = {
      where: { deleted: { equals: false } },
    },
  ) {
    return this.prisma.author.findMany(options);
  }

  paginatedFindAll(
    options: PaginateOptions = {
      page: 1,
      perPage: 10,
    },
  ): Promise<PaginatedResult<Author>> {
    const paginate = createPaginator(options);
    return paginate<Author, Prisma.AuthorFindManyArgs>(this.prisma.author, {
      where: {
        deleted: { equals: false },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.author.findUnique({ where: { id, deleted: false } });
  }

  update(id: string, updateAuthorInput: UpdateAuthorInput) {
    return this.prisma.author.update({
      where: { id, deleted: false },
      data: updateAuthorInput,
    });
  }

  remove(id: string) {
    return this.prisma.author.update({
      where: { id, deleted: false },
      data: {
        deleted: true,
      },
    });
  }
}
