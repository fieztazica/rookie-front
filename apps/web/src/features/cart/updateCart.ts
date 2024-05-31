import { getClient } from '@/lib/apollo/apollo-client';
import { gql } from '@/src/__generated__';
import { CartItemInput } from '@/src/__generated__/graphql';

export const UPDATE_CART = gql(`
    mutation UpdateCart($customerId: String!, $items: [CartItemInput!]!) {
        updateCart(
            customerId: $customerId,
            items: $items
        ) {
            items {
                key
                value
            }
        }
    }
`);

export function updateCart(customerId: string, items: CartItemInput[]) {
  return getClient().mutate({
    errorPolicy: 'all',
    mutation: UPDATE_CART,
    variables: {
      customerId,
      items,
    },
  });
}
