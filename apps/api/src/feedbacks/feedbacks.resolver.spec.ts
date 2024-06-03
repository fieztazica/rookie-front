import { Test, TestingModule } from '@nestjs/testing';
import { FeedbacksResolver } from './feedbacks.resolver';
import { FeedbacksService } from './feedbacks.service';

describe('FeedbacksResolver', () => {
  let resolver: FeedbacksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: FeedbacksResolver, useValue: {} },
        { provide: FeedbacksService, useValue: {} },
      ],
    }).compile();

    resolver = module.get<FeedbacksResolver>(FeedbacksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
