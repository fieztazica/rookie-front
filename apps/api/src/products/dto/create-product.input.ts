import { Prisma } from '@prisma/client';
import { ProductCreateInput } from '../../@generated/product/product-create.input';

export { ProductCreateInput as CreateProductInput };

export const DEFAULT_PRODUCT_CREATE_INPUT = (): ProductCreateInput => ({
  name: '',
  description: '',
  price: new Prisma.Decimal(0),
});
