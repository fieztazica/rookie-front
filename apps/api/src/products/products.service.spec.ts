import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { FeedbacksService } from 'src/feedbacks/feedbacks.service';
import { ConfigService } from '@nestjs/config';

const mockProducts = {
  findAll: jest.fn(),
  paginatedFindAll: jest.fn(),
  findOne: jest.fn(),
  calculateRatingsByProductId: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ProductsService,
          useValue: mockProducts,
        },
        {
          provide: FeedbacksService,
          useValue: {},
        },
        {
          provide: ConfigService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
