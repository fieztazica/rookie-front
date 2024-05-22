import { Inject, Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import { PrismaService } from 'src/common/database/prisma.service';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions,
} from 'prisma-pagination';
import { Author } from '@prisma/client';
import { FindManyAuthorArgs } from 'src/__generated__/author/find-many-author.args';

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
    return paginate<Author, FindManyAuthorArgs>(this.prisma.author, {
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
