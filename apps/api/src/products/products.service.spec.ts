import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { Product } from '@prisma/client';

export const mockProducts: Product[] = [
  {
    id: 'xxxx-xxxxxxxxx-xx-1',
    name: 'product-1',
    description: 'This is a fake product',
    price: 99.99,
    deleted: false,
    displayName: 'Fake Product 1',
    imageUrl: 'https://via.placeholder.com/150',
    salePrice: 89.99,
    ratings: 4.5,
    accountId: '1234567890',
    storeQuantity: 100,
    createdAt: new Date('2021-01-01'),
    updatedAt: new Date('2021-01-02'),
  },
  {
    id: 'xxxx-xxxxxxxxx-xx-2',
    name: 'product-2',
    description: 'description 2',
    price: 100,
    deleted: false,
    displayName: 'Fake Product 2',
    imageUrl: 'https://example.com/fake-product.jpg',
    salePrice: 80,
    ratings: 4.5,
    accountId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    storeQuantity: 5,
    createdAt: new Date('2022-01-01T00:00:00Z'),
    updatedAt: new Date('2022-01-02T00:00:00Z'),
  },
];

export const paginatedProducts = {
  data: mockProducts,
  meta: {
    total: mockProducts.length,
    page: 1,
    lastPage: 1,
    perPage: 10,
    prev: null,
    next: null,
  },
};

export const oneProduct = mockProducts[0];
export const updatedProduct = { ...oneProduct, name: 'updated' };
export const deletedProduct = { ...oneProduct, deleted: true };

export const mockProductsService = {
  findAll: jest.fn().mockResolvedValue(mockProducts),
  paginatedFindAll: jest.fn().mockResolvedValue(paginatedProducts),
  findOne: jest.fn().mockResolvedValue(oneProduct),
  calculateRatingsByProductId: jest.fn().mockResolvedValue(4.5),
  create: jest.fn().mockResolvedValue(oneProduct),
  update: jest.fn().mockResolvedValue(updatedProduct),
  remove: jest.fn().mockResolvedValue(deletedProduct),
  getProductFeedbacks: jest.fn().mockResolvedValue([]),
  getProductOrderItems: jest.fn().mockResolvedValue([]),
  getProductCategories: jest.fn().mockResolvedValue([]),
  getProductAuthors: jest.fn().mockResolvedValue([]),
};

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ProductsService,
          useValue: mockProductsService,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should returns products', async () => {
      expect(await service.findAll()).toEqual(mockProducts);
    });
  });

  describe('findOne', () => {
    it('should returns found product', async () => {
      expect(await service.findOne(oneProduct.id)).toEqual(oneProduct);
    });
  });

  describe('update', () => {
    it('should returns updated product', async () => {
      expect(
        await service.update(oneProduct.id, {
          id: oneProduct.id,
          name: 'updated',
        }),
      ).toEqual(updatedProduct);
    });
  });

  describe('remove', () => {
    it('should returns deleted product', async () => {
      expect(await service.remove(oneProduct.id)).toEqual(deletedProduct);
    });
  });

  describe('calculateRatingsByProductId', () => {
    it('should returns calculated ratings of the product', async () => {
      expect(await service.calculateRatingsByProductId(oneProduct.id)).toEqual(
        4.5,
      );
    });
  });

  describe('create', () => {
    it('should returns created product', async () => {
      expect(await service.create(oneProduct)).toEqual(oneProduct);
    });
  });

  describe('paginatedFindAll', () => {
    it('should returns paginated products', async () => {
      expect(await service.paginatedFindAll()).toEqual(paginatedProducts);
    });
  });

  describe('getProductFeedbacks', () => {
    it('should returns product feedbacks', async () => {
      expect(await service.getProductFeedbacks(oneProduct.id)).toEqual([]);
    });
  });

  describe('getProductOrderItems', () => {
    it('should returns product order items', async () => {
      expect(await service.getProductOrderItems(oneProduct.id)).toEqual([]);
    });
  });

  describe('getProductCategories', () => {
    it('should returns product categories', async () => {
      expect(await service.getProductCategories(oneProduct.id)).toEqual([]);
    });
  });

  describe('getProductAuthors', () => {
    it('should returns product authors', async () => {
      expect(await service.getProductAuthors(oneProduct.id)).toEqual([]);
    });
  });
});
