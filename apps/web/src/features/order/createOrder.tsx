import { getClient } from '@/lib/apollo/apollo-client';
import { gql } from '@/src/__generated__';

export const CREATE_ORDER = gql(`
    mutation CreateOrder($customerId: String!, $cartItems: [CartItemInput!]!) {
        makeOrder(customerId: $customerId, cartItems: $cartItems) {
            id
            total
        }
    }
`);

export async function createOrder(
  customerId: string,
  cartItems: { key: string; value: number }[],
) {
  return getClient().mutate({
    errorPolicy: 'all',
    mutation: CREATE_ORDER,
    variables: {
      customerId,
      cartItems,
    },
  });
}
