import { Prisma, ProductCreateInput } from '@repo/db';

export { ProductCreateInput as CreateProductInput };

export const DEFAULT_PRODUCT_CREATE_INPUT = (): ProductCreateInput => ({
  name: '',
  description: '',
  price: new Prisma.Decimal(0),
});
