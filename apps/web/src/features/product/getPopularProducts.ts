import { getClient } from '@/lib/apollo/apollo-client';
import { gql } from '@/src/__generated__';

export const getPopularProductsTag = () => `products?popular`

export const GET_POPULAR_PRODUCTS = gql(`
    query GetPopularProducts {
        getPopularProducts {
            id
            name
            displayName
            authors {
                author {
                    firstName
                    lastName
                    displayName
                }
            }
            salePrice
            imageUrl
            price
        }
    }
`);

export async function getPopularProducts() {
  return getClient().query({
    errorPolicy: 'all',
    query: GET_POPULAR_PRODUCTS,
    context: {
      fetchOptions: {
        next: {
          tags: [getPopularProductsTag()],
        },
      },
    },
  });
}
