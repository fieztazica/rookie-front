import { useQuery } from '@apollo/client';
import { COUNT_CART_ITEMS } from './cart.queries';

export function useCountCartItems(customerId: string) {
  return useQuery(COUNT_CART_ITEMS, {
    errorPolicy: 'all',
    variables: {
      customerId,
    },
  });
}
