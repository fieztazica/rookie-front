import { Inject, Injectable } from '@nestjs/common';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { UpdateFeedbackInput } from './dto/update-feedback.input';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import { PrismaService } from '../common/database/prisma.service';

@Injectable()
export class FeedbacksService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createFeedbackInput: CreateFeedbackInput) {
    return this.prisma.feedback.create({ data: createFeedbackInput });
  }

  findAll() {
    return this.prisma.feedback.findMany();
  }

  findOne(id: string) {
    return this.prisma.feedback.findUnique({ where: { id } });
  }

  update(id: string, updateFeedbackInput: UpdateFeedbackInput) {
    return this.prisma.feedback.update({
      where: { id },
      data: updateFeedbackInput,
    });
  }

  remove(id: string) {
    return this.prisma.feedback.delete({ where: { id } });
  }
}
