import { useSuspenseQuery } from '@apollo/client';
import { GET_PRODUCT } from './getProduct';

export function useGetProduct(productId: string) {
  return useSuspenseQuery(GET_PRODUCT, {
    errorPolicy: 'all',
    variables: {
      productId,
    },
    queryKey: `product_${productId}`,
  });
}
