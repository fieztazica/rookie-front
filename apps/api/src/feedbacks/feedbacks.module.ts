import { Module } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { FeedbacksResolver } from './feedbacks.resolver';

@Module({
  providers: [FeedbacksResolver, FeedbacksService],
})
export class FeedbacksModule {}
