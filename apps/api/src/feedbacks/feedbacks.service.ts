import { Inject, Injectable } from '@nestjs/common';
import { Feedback, Prisma } from '@prisma/client';
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
  create(createFeedbackInput: CreateFeedbackInput): Promise<Feedback> {
    return this.prisma.feedback.create({ data: createFeedbackInput });
  }

  findAll(
    options: Prisma.FeedbackFindManyArgs = {
      where: { deleted: { equals: false } },
    },
  ) {
    return this.prisma.feedback.findMany(options);
  }
  paginatedFindAll(
    options: PaginateOptions = { page: 1, perPage: 10 },
  ): Promise<PaginatedResult<Feedback>> {
    const paginate = createPaginator(options);
    return paginate<Feedback, Prisma.FeedbackFindManyArgs>(
      this.prisma.feedback,
      {
        where: { deleted: { equals: false } },
      },
    );
  }

  findOne(id: string): Promise<Feedback> {
    return this.prisma.feedback.findUnique({ where: { id, deleted: false } });
  }

  update(
    id: string,
    updateFeedbackInput: UpdateFeedbackInput,
  ): Promise<Feedback> {
    return this.prisma.feedback.update({
      where: { id, deleted: false },
      data: updateFeedbackInput,
    });
  }

  remove(id: string): Promise<Feedback> {
    return this.prisma.feedback.update({
      where: { id, deleted: false },
      data: {
        deleted: true,
      },
    });
  }
}
