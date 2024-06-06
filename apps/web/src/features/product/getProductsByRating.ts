import { useSuspenseQuery } from '@apollo/client';
import { gql } from '@/src/__generated__';

export const getProductsByRatingTag = (ratings: number) =>
  `products?ratings=${ratings}`;

export const GET_PRODUCTS_BY_RATING = gql(`
    query GetProductsByRating($minRatings: Float!, $maxRatings: Float!) {
        products(where: {
            ratings: {
                gte: $minRatings
                lt: $maxRatings
            }
            deleted: {
                equals: false
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

export function useGetProductsByRating(ratings: number) {
  return useSuspenseQuery(GET_PRODUCTS_BY_RATING, {
    errorPolicy: 'all',
    query: GET_PRODUCTS_BY_RATING,
    variables: {
      minRatings: ratings,
      maxRatings: ratings + 1,
    },
    context: {
      fetchOptions: {
        next: {
          tags: [getProductsByRatingTag(ratings)],
        },
      },
    },
  });
}
