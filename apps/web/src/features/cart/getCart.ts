import { getClient } from '@/lib/apollo/apollo-client';
import { gql } from '@/src/__generated__';

export const getCartTag = (customerId: string) => `cart/${customerId}`;

export const GET_CART = gql(`
    query GetCart($customerId: String!) {
        cart(customerId: $customerId) {
            items {
                key
                value
            }
        }
    }
`);

export async function getCart(customerId: string) {
  return getClient().query({
    errorPolicy: 'all',
    query: GET_CART,
    variables: {
      customerId,
    },
    context: {
      fetchOptions: {
        next: {
          tags: [getCartTag(customerId)],
        },
      },
    },
  });
}
