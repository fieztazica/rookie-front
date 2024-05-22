import { Inject, Injectable } from '@nestjs/common';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import {
  createPaginator,
  PaginatedResult,
  PaginateOptions,
} from 'prisma-pagination';
import { PrismaService } from '../common/database/prisma.service';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { UpdateFeedbackInput } from './dto/update-feedback.input';
import { Feedback } from '@prisma/client';
import { FindManyFeedbackArgs } from 'src/__generated__/feedback/find-many-feedback.args';

@Injectable()
export class FeedbacksService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createFeedbackInput: CreateFeedbackInput): Promise<Feedback> {
    return this.prisma.feedback.create({ data: createFeedbackInput });
  }

  findAll(options: PaginateOptions = {}): Promise<PaginatedResult<Feedback>> {
    const paginate = createPaginator(options);
    return paginate<Feedback, FindManyFeedbackArgs>(this.prisma.feedback, {
      where: { deleted: { equals: false } },
    });
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
