import { Test, TestingModule } from '@nestjs/testing';
import { FeedbacksService } from './feedbacks.service';
import { Feedback } from '@prisma/client';
import { ProductRating, StarRatings } from './entities/product-rating.entity';

export const mockFeedbacks: Feedback[] = [
  {
    id: '1',
    customerId: '1',
    productId: '1',
    title: 'Test Feedback',
    message: 'This is a test feedback',
    rating: 4,
    status: 'approved',
    deleted: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'fakeId',
    customerId: 'fakeCustomerId',
    productId: 'fakeProductId',
    title: 'Fake Feedback',
    message: 'This is a fake feedback',
    rating: 3,
    status: 'approved',
    deleted: false,
    createdAt: new Date('2022-01-01'),
    updatedAt: new Date('2022-01-02'),
  },
];

export const oneFeedback = mockFeedbacks[0];
export const updatedFeedback = {
  ...oneFeedback,
  rating: 5,
};
export const deletedFeedback = { ...oneFeedback, deleted: true };

export const mockPaginatedFeedbacks = {
  data: mockFeedbacks,
  meta: {
    total: mockFeedbacks.length,
    page: 1,
    lastPage: 1,
    perPage: 10,
    prev: null,
    next: null,
  },
};

export const mockStarRatings: StarRatings = {
  five: Math.floor(Math.random() * 20),
  four: Math.floor(Math.random() * 20),
  three: Math.floor(Math.random() * 20),
  two: Math.floor(Math.random() * 20),
  one: Math.floor(Math.random() * 20),
};

export const mockTotalRatings = Object.values(mockStarRatings).reduce(
  (acc, val) => acc + val,
  0,
);

export const mockAverageRatings =
  (1 * mockStarRatings['one'] +
    2 * mockStarRatings['two'] +
    3 * mockStarRatings['three'] +
    4 * mockStarRatings['four'] +
    5 * mockStarRatings['five']) /
  Math.max(mockTotalRatings, 1);

export const mockProductRating: ProductRating = {
  totalRatings: mockTotalRatings,
  averageRatings: mockAverageRatings,
  ratings: mockStarRatings,
};

export const mockFeedbacksService = {
  create: jest.fn().mockResolvedValue(oneFeedback),
  findAll: jest.fn().mockResolvedValue(mockFeedbacks),
  paginatedFindAll: jest.fn().mockResolvedValue(mockPaginatedFeedbacks),
  paginatedFindAllByProductId: jest
    .fn()
    .mockResolvedValue(mockPaginatedFeedbacks),
  findOne: jest.fn().mockResolvedValue(oneFeedback),
  update: jest.fn().mockResolvedValue(updatedFeedback),
  remove: jest.fn().mockResolvedValue(deletedFeedback),
  calculateProductRatingByProductId: jest
    .fn()
    .mockResolvedValue(mockProductRating),
};

describe('FeedbacksService', () => {
  let service: FeedbacksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: FeedbacksService,
          useValue: mockFeedbacksService,
        },
      ],
    }).compile();

    service = module.get<FeedbacksService>(FeedbacksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should returns feedbacks', async () => {
      expect(await service.findAll()).toEqual(mockFeedbacks);
    });
  });

  describe('findOne', () => {
    it('should returns feedback', async () => {
      expect(await service.findOne(oneFeedback.id)).toEqual(oneFeedback);
    });
  });

  describe('update', () => {
    it('should returns updated feedback', async () => {
      expect(await service.update(oneFeedback.id, updatedFeedback)).toEqual(
        updatedFeedback,
      );
    });
  });

  describe('remove', () => {
    it('should returns deleted feedback', async () => {
      expect(await service.remove(oneFeedback.id)).toEqual(deletedFeedback);
    });
  });

  describe('paginatedFindAll', () => {
    it('should returns paginated feedbacks', async () => {
      expect(await service.paginatedFindAll()).toEqual(mockPaginatedFeedbacks);
    });
  });

  describe('paginatedFindAllByProductId', () => {
    it('should returns paginated feedbacks', async () => {
      expect(
        await service.paginatedFindAllByProductId('fakeProductId'),
      ).toEqual(mockPaginatedFeedbacks);
    });
  });

  describe('calculateProductRatingByProductId', () => {
    it('should returns calculated ratings of the product', async () => {
      expect(
        await service.calculateProductRatingByProductId('fakeProductId'),
      ).toEqual(mockProductRating);
    });
  });
});
