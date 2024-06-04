import { Test, TestingModule } from '@nestjs/testing';
import { FeedbacksResolver } from './feedbacks.resolver';
import { FeedbacksService } from './feedbacks.service';
import {
  mockFeedbacks,
  mockFeedbacksService,
  oneFeedback,
  updatedFeedback,
  deletedFeedback,
  mockPaginatedFeedbacks,
} from './feedbacks.service.spec';
import { CustomersService } from 'src/customers/customers.service';
import { ProductsService } from 'src/products/products.service';

describe('FeedbacksResolver', () => {
  let resolver: FeedbacksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FeedbacksResolver,
        { provide: FeedbacksService, useValue: mockFeedbacksService },
        { provide: CustomersService, useValue: {} },
        { provide: ProductsService, useValue: {} },
      ],
    }).compile();

    resolver = module.get<FeedbacksResolver>(FeedbacksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('findAll', () => {
    it('should returns feedbacks', async () => {
      expect(await resolver.findAll()).toEqual(mockFeedbacks);
    });
  });

  describe('findOne', () => {
    it('should returns feedback', async () => {
      expect(await resolver.findOne(oneFeedback.id)).toEqual(oneFeedback);
    });
  });

  describe('update', () => {
    it('should returns updated feedback', async () => {
      expect(await resolver.updateFeedback(updatedFeedback)).toEqual(
        updatedFeedback,
      );
    });
  });

  describe('remove', () => {
    it('should returns deleted feedback', async () => {
      expect(await resolver.removeFeedback(oneFeedback.id)).toEqual(
        deletedFeedback,
      );
    });
  });

  describe('paginatedFindAll', () => {
    it('should returns paginated feedbacks', async () => {
      expect(await resolver.paginatedFindAll()).toEqual(mockPaginatedFeedbacks);
    });
  });

  describe('paginatedFindAllByProductId', () => {
    it('should returns paginated feedbacks', async () => {
      expect(
        await resolver.paginatedFindAllByProductId('fakeProductId'),
      ).toEqual(mockPaginatedFeedbacks);
    });
  });

  describe('createFeedback', () => {
    it('should returns created feedback', async () => {
      expect(
        await resolver.createFeedback({
          title: oneFeedback.title,
          message: oneFeedback.message,
          rating: oneFeedback.rating,
          customer: {
            connect: { id: 'fakeCustomerId' },
          },
          product: {
            connect: { id: 'fakeProductId' },
          },
        }),
      ).toEqual(oneFeedback);
    });
  });
});
