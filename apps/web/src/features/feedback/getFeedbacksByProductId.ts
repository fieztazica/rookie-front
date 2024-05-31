import { gql } from '@/src/__generated__';
import { useSuspenseQuery } from '@apollo/client';

export const GET_FEEDBACKS_BY_PRODUCT_ID = gql(`
    query GetFeedbackByProductId($productId: String!, $pagination: PaginationInput) {
        paginatedFeedbacksByProductId(
        productId: $productId,
        pagination: $pagination
        ) {
            data {
                id
                title
                message
                rating
                customer {
                    id
                    firstName
                    lastName
                    displayName
                }
                updatedAt
                createdAt
            }
            meta {
                perPage
                currentPage
                total
                prev
                next
                lastPage
            }
        }
    }
`);

export function useGetFeedbacksByProductId(
  productId: string,
  pagination: PaginationOptions = { page: 1, perPage: 10 },
) {
  return useSuspenseQuery(GET_FEEDBACKS_BY_PRODUCT_ID, {
    variables: { productId, pagination },
  });
}
