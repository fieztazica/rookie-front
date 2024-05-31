import { getClient } from '@/lib/apollo/apollo-client';
import { gql } from '@/src/__generated__';

export const getProductsTag = () => `products?onSale`

export const GET_ON_SALE_PRODUCTS = gql(`
    query GetOnSaleProducts {
        products(where: {
            salePrice: {
                gte: 0
            }
        }) {
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

export async function getOnSaleProducts() {
  return getClient().query({
    errorPolicy: 'all',
    query: GET_ON_SALE_PRODUCTS,
    context: {
      fetchOptions: {
        next: {
          tags: [getProductsTag()],
        },
      },
    },
  });
}
