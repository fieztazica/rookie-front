import {
    PaginationOptions,
    usePaginatedQuery,
} from '../pagination/usePaginatedQuery';
import { GET_PRODUCTS } from './product.queries';

export function useGetProducts(options?: PaginationOptions) {
  return usePaginatedQuery(GET_PRODUCTS, options);
}
