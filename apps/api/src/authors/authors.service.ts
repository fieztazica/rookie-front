import { Inject, Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import { PrismaService } from 'src/common/database/prisma.service';

@Injectable()
export class AuthorsService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createAuthorInput: CreateAuthorInput) {
    return this.prisma.author.create({ data: createAuthorInput });
  }

  findAll() {
    return this.prisma.author.findMany({
      where: {
        deleted: false,
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
