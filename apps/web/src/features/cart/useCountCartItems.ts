import { useSuspenseQuery } from '@apollo/client';
import { COUNT_CART_ITEMS } from './cart.queries';

export function useCountCartItems() {
  return useSuspenseQuery(COUNT_CART_ITEMS, {
    errorPolicy: 'all',
    context: {
      simulateError: true,
    },
    variables: {
      customerId: '1',
    },
  });
}
