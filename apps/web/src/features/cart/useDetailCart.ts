import { useQuery } from '@apollo/client';
import { GET_CART_WITH_PRODUCTS } from './cart.queries';

export function useDetailCart(customerId: string) {
  return useQuery(GET_CART_WITH_PRODUCTS, {
    errorPolicy: 'all',
    variables: {
      customerId,
    },
  });
}
