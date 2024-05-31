import { getClient } from '@/lib/apollo/apollo-client';
import { gql } from '@/src/__generated__';

export const getProductTag = (productId: string) => `products/${productId}`;

export const GET_PRODUCT = gql(`
    query GetProduct($productId: String!) {
        product(id: $productId) {
            id
            name
            displayName
            description
            imageUrl
            price
            salePrice
            authors {
                author {
                    firstName
                    lastName
                    displayName
                }
            }
            categories {
                category {
                    name
                    displayName
                }
            }
        }
    }
`);

export async function getProduct(productId: string) {
  return getClient().query({
    errorPolicy: 'all',
    query: GET_PRODUCT,
    variables: { productId: productId },
    context: {
        fetchOptions: {
            next: {
                tags: [getProductTag(productId)]
            }
        }
    }
  });
}
