import { Test, TestingModule } from '@nestjs/testing';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import {
  mockProductsService,
  mockProducts,
  paginatedProducts,
  oneProduct,
  updatedProduct,
  deletedProduct,
} from './products.service.spec';
import { FeedbacksService } from 'src/feedbacks/feedbacks.service';

describe('ProductsResolver', () => {
  let resolver: ProductsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsResolver,
        { provide: ProductsService, useValue: mockProductsService },
        { provide: FeedbacksService, useValue: {} },
      ],
    }).compile();

    resolver = module.get<ProductsResolver>(ProductsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('findAll', () => {
    it('should returns products', async () => {
      expect(await resolver.findAll({})).toEqual(mockProducts);
    });
  });

  describe('findOne', () => {
    it('should returns found product', async () => {
      expect(await resolver.findOne(oneProduct.id)).toEqual(oneProduct);
    });
  });

  describe('update', () => {
    it('should returns updated product', async () => {
      expect(
        await resolver.updateProduct({
          id: oneProduct.id,
          name: 'updated',
        }),
      ).toEqual(updatedProduct);
    });
  });

  describe('remove', () => {
    it('should returns deleted product', async () => {
      expect(await resolver.removeProduct(oneProduct.id)).toEqual(
        deletedProduct,
      );
    });
  });

  describe('create', () => {
    it('should returns created product', async () => {
      expect(await resolver.createProduct(oneProduct)).toEqual(oneProduct);
    });
  });

  describe('paginatedFindAll', () => {
    it('should returns paginated products', async () => {
      expect(await resolver.paginatedFindAll({})).toEqual(paginatedProducts);
    });
  });

  describe('getRating', () => {
    it('should returns product rating', async () => {
      expect(await resolver.getRating(oneProduct)).toEqual(4.5);
    });
  });

  describe('getAuthors', () => {
    it('should returns product authors', async () => {
      expect(await resolver.getAuthors(oneProduct)).toEqual([]);
    });
  });

  describe('getFeedbacks', () => {
    it('should returns product feedbacks', async () => {
      expect(await resolver.getFeedbacks(oneProduct)).toEqual([]);
    });
  });

  describe('getCategories', () => {
    it('should returns product categories', async () => {
      expect(await resolver.getCategories(oneProduct)).toEqual([]);
    });
  });

  describe('getOrders', () => {
    it('should returns product order items', async () => {
      expect(await resolver.getOrders(oneProduct)).toEqual([]);
    });
  });
});
