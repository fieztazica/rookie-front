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

  create(createAuthorInput: CreateAuthorInput): Promise<Author> {
    return this.prisma.author.create({ data: createAuthorInput });
  }

  findAll(options: PaginateOptions = {}): Promise<PaginatedResult<Author>> {
    const paginate = createPaginator(options);
    return paginate<Author, Prisma.AuthorFindManyArgs>(this.prisma.author, {
      where: {
        deleted: { equals: false },
      },
    });
  }

  findOne(id: string): Promise<Author> {
    return this.prisma.author.findUnique({ where: { id, deleted: false } });
  }

  update(id: string, updateAuthorInput: UpdateAuthorInput): Promise<Author> {
    return this.prisma.author.update({
      where: { id, deleted: false },
      data: updateAuthorInput,
    });
  }

  remove(id: string): Promise<Author> {
    return this.prisma.author.update({
      where: { id, deleted: false },
      data: {
        deleted: true,
      },
    });
  }
}
