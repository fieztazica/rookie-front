import { Test, TestingModule } from '@nestjs/testing';
import { FeedbacksResolver } from './feedbacks.resolver';
import { FeedbacksService } from './feedbacks.service';

describe('FeedbacksResolver', () => {
  let resolver: FeedbacksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeedbacksResolver, FeedbacksService],
    }).compile();

    resolver = module.get<FeedbacksResolver>(FeedbacksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
