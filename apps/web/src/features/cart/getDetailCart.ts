import { getClient } from '@/lib/apollo/apollo-client';
import { gql } from '@/src/__generated__';

export const getDetailCartTag = (customerId: string) =>
  `getDetailCart/${customerId}`;

export const GET_DETAIL_CART = gql(`
    query GetDetailCart($customerId: String!) {
        cart(customerId: $customerId) {
            items {
                key
                value
            }
            products {
                id
                imageUrl
                name
                displayName
                price
                salePrice
                authors {
                    author {
                        firstName
                        lastName
                        displayName
                    }
                }
            }
        }
    }
`);

export async function getDetailCart(customerId: string) {
  return getClient().query({
    errorPolicy: 'all',
    query: GET_DETAIL_CART,
    variables: {
      customerId,
    },
    context: {
      fetchOptions: {
        next: {
          tags: [getDetailCartTag(customerId)],
        },
      },
    },
  });
}
