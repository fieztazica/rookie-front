import { Inject, Injectable } from '@nestjs/common';
import { CreateConfigInput } from './dto/create-config.input';
import { UpdateConfigInput } from './dto/update-config.input';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import { PrismaService } from 'src/common/database/prisma.service';
import { Config, Prisma } from '@prisma/client';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions,
} from 'prisma-pagination';

@Injectable()
export class ConfigsService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createConfigInput: CreateConfigInput) {
    return this.prisma.config.create({ data: createConfigInput });
  }

  findAll(options?: PaginateOptions): Promise<PaginatedResult<Config>> {
    const paginate = createPaginator(options);
    return paginate<Config, Prisma.ConfigFindManyArgs>(this.prisma.config, {
      where: { deleted: { equals: false } },
    });
  }

  findOne(key: string) {
    return this.prisma.config.findUnique({ where: { key, deleted: false } });
  }

  update(key: string, updateConfigInput: UpdateConfigInput) {
    return this.prisma.config.update({
      where: { key, deleted: false },
      data: updateConfigInput,
    });
  }

  remove(key: string) {
    return this.prisma.config.update({
      where: { key, deleted: false },
      data: {
        deleted: true,
      },
    });
  }
}
