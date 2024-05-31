import { gql } from '@/src/__generated__';
import { useSuspenseQuery } from '@apollo/client';

export const GET_AUTHOR_PRODUCTS = gql(`
    query GetAuthorProducts($authorId: String!) {
        author(id: $authorId) {
            id
            firstName
            lastName
            displayName
            products {
                product {
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
    }
`);

export function useGetAuthorProducts(authorId?: string | null) {
  if (!authorId) return { data: undefined };
  return useSuspenseQuery(GET_AUTHOR_PRODUCTS, {
    errorPolicy: 'all',
    variables: {
      authorId,
    },
  });
}
