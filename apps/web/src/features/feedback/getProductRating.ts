import { gql } from '@/src/__generated__';
import { useSuspenseQuery } from '@apollo/client';

export const GET_PRODUCT_RATING = gql(`
    query GetProductRating($productId: String!) {
        calculateProductRatingByProductId(id: $productId) {
            averageRatings
            totalRatings
            ratings {
                five
                four
                three
                two
                one
            }
        }
    }
`);

export function useGetProductRating(productId: string) {
  return useSuspenseQuery(GET_PRODUCT_RATING, {
    errorPolicy: 'all',
    variables: { productId },
  });
}
