import { getClient } from '@/lib/apollo/apollo-client';
import { gql } from '@/src/__generated__';

export const ADD_TO_CART = gql(`
    mutation AddToCart($customerId: String!, $productId: String!, $amount: Int!) {
        addCartItem(
            customerId: $customerId,
            input: {
                key: $productId,
                value: $amount
            }) {
                items {
                    key
                    value
                }
            }
    }
`);

export function addToCart(
  customerId: string,
  productId: string,
  amount: number,
) {
  return getClient().mutate({
    errorPolicy: 'all',
    mutation: ADD_TO_CART,
    variables: { customerId, productId, amount },
  });
}
