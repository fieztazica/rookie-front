import { Inject, Injectable } from '@nestjs/common';
import { FeedbackPrisma, FindManyFeedbackArgs } from '@repo/db';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions,
} from 'prisma-pagination';
import { PrismaService } from '../common/database/prisma.service';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { UpdateFeedbackInput } from './dto/update-feedback.input';

@Injectable()
export class FeedbacksService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createFeedbackInput: CreateFeedbackInput): Promise<FeedbackPrisma> {
    return this.prisma.feedback.create({ data: createFeedbackInput });
  }

  findAll(
    options: PaginateOptions = {},
  ): Promise<PaginatedResult<FeedbackPrisma>> {
    const paginate = createPaginator(options);
    return paginate<FeedbackPrisma, FindManyFeedbackArgs>(
      this.prisma.feedback,
      {
        where: { deleted: { equals: false } },
      },
    );
  }

  findOne(id: string): Promise<FeedbackPrisma> {
    return this.prisma.feedback.findUnique({ where: { id, deleted: false } });
  }

  update(
    id: string,
    updateFeedbackInput: UpdateFeedbackInput,
  ): Promise<FeedbackPrisma> {
    return this.prisma.feedback.update({
      where: { id, deleted: false },
      data: updateFeedbackInput,
    });
  }

  remove(id: string): Promise<FeedbackPrisma> {
    return this.prisma.feedback.update({
      where: { id, deleted: false },
      data: {
        deleted: true,
      },
    });
  }
}
