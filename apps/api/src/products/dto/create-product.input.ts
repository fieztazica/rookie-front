import { ProductCreateInput } from 'src/__generated__/product/product-create.input';

export { ProductCreateInput as CreateProductInput };

export const DEFAULT_PRODUCT_CREATE_INPUT = (): ProductCreateInput &
  Record<string, any> => ({
  name: '',
  displayName: '',
  description: '',
  imageUrl: '',
  price: 0,
  salePrice: 0,
  categoryNames: '',
  authorNames: '',
});
