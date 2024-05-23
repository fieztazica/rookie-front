import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from './product.queries';

export function useGetProducts() {
  return useQuery(GET_PRODUCTS);
}
