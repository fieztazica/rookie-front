import { apolloClient } from '@/lib/apollo/ssr-client';
import { ADD_TO_CART } from './cart.queries';

export function addToCart(
  customerId: string,
  productId: string,
  amount: number,
) {
  return apolloClient.mutate({
    errorPolicy: 'all',
    mutation: ADD_TO_CART,
    variables: { customerId, productId, amount },
  });
}
