import { useSuspenseQuery } from '@apollo/client';
import { GET_PRODUCT } from './product.queries';

export function useGetProduct(id: string) {
  return useSuspenseQuery(GET_PRODUCT, {
    variables: {
      id: `${id}`
    },
    queryKey: `product_${id}`,
  });
}
