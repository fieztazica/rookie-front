import { ProductCreateInput } from 'src/__generated__/product/product-create.input';

export { ProductCreateInput as CreateProductInput };

export const DEFAULT_PRODUCT_CREATE_INPUT = (): ProductCreateInput => ({
  name: '',
  displayName: '',
  description: '',
  price: 0,
  salePrice: 0,
});
