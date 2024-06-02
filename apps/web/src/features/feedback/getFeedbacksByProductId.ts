import { gql } from '@/src/__generated__';
import {
  AllowedFeedbacksSortBy,
  FilterFeedbackInput,
} from '@/src/__generated__/graphql';
import { useSuspenseQuery } from '@apollo/client';

export const GET_FEEDBACKS_BY_PRODUCT_ID = gql(`
    query GetFeedbackByProductId($productId: String!, $pagination: PaginationInput, $filters: FilterFeedbackInput) {
        paginatedFeedbacksByProductId(
            productId: $productId,
            pagination: $pagination,
            filters: $filters
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
  filters: FilterFeedbackInput = {
    sortBy: AllowedFeedbacksSortBy.Onsale,
    star: 5,
  },
) {
  return useSuspenseQuery(GET_FEEDBACKS_BY_PRODUCT_ID, {
    errorPolicy: 'all',
    variables: { productId, pagination, filters },
  });
}
