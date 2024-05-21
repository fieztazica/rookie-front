import { Inject, Injectable } from '@nestjs/common';
import { FindManyPublisherArgs, PublisherPrisma } from '@repo/db';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions,
} from 'prisma-pagination';
import { PrismaService } from '../common/database/prisma.service';
import { CreatePublisherInput } from './dto/create-publisher.input';
import { UpdatePublisherInput } from './dto/update-publisher.input';

@Injectable()
export class PublishersService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createPublisherInput: CreatePublisherInput): Promise<PublisherPrisma> {
    return this.prisma.publisher.create({ data: createPublisherInput });
  }

  findAll(
    options?: PaginateOptions,
  ): Promise<PaginatedResult<PublisherPrisma>> {
    const paginate = createPaginator(options);
    return paginate<PublisherPrisma, FindManyPublisherArgs>(
      this.prisma.publisher,
      {
        where: { deleted: { equals: false } },
      },
    );
  }

  findOne(id: string): Promise<PublisherPrisma> {
    return this.prisma.publisher.findUnique({ where: { id, deleted: false } });
  }

  update(
    id: string,
    updatePublisherInput: UpdatePublisherInput,
  ): Promise<PublisherPrisma> {
    return this.prisma.publisher.update({
      where: { id, deleted: false },
      data: updatePublisherInput,
    });
  }

  remove(id: string): Promise<PublisherPrisma> {
    return this.prisma.publisher.update({
      where: { id, deleted: false },
      data: {
        deleted: true,
      },
    });
  }
}
