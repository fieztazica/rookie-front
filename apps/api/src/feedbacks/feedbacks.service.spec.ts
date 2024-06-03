import { Test, TestingModule } from '@nestjs/testing';
import { FeedbacksService } from './feedbacks.service';

const mockFeedbacks = {
  create: jest.fn(),
  findAll: jest.fn(),
  paginatedFindAll: jest.fn(),
  paginatedFindAllByProductId: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('FeedbacksService', () => {
  let service: FeedbacksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: FeedbacksService,
          useValue: mockFeedbacks,
        },
      ],
    }).compile();

    service = module.get<FeedbacksService>(FeedbacksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
