import { gql } from '@/src/__generated__';
import { useSuspenseQuery } from '@apollo/client';

export const GET_CATEGORY_PRODUCTS = gql(`
    query GetCategoryProducts($categoryId: String!) {
        category(id: $categoryId) {
            id
            name
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

export function useGetCategoryProducts(categoryId?: string | null) {
  if (!categoryId) return { data: undefined };
  return useSuspenseQuery(GET_CATEGORY_PRODUCTS, {
    errorPolicy: 'all',
    variables: {
      categoryId,
    },
  });
}
