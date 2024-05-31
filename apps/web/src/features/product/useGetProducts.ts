import { usePaginatedQuery } from '../pagination/usePaginatedQuery';
import { gql } from '@/src/__generated__';

export const USE_GET_PRODUCTS = gql(`
    query UseGetProducts($page: Int, $perPage: Int) {
        paginatedProducts(page: $page, perPage: $perPage) {
            data {
                id
                name
                displayName
                authors {
                    author {
                        firstName
                        lastName
                    }
                }
                salePrice
                imageUrl
                price
            }
            meta {
                total
                lastPage
                currentPage
                perPage
                prev
                next
            }
        }
    }
`);

export function useGetProducts(options?: PaginationOptions) {
  return usePaginatedQuery(USE_GET_PRODUCTS, options);
}
