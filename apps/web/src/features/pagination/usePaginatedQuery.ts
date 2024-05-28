import {
  DocumentNode,
  TypedDocumentNode,
  useSuspenseQuery,
} from '@apollo/client';

export type PaginationOptions = {
  page: number;
  perPage: number;
};

export function usePaginatedQuery<T, OperationVariables>(
  query: DocumentNode | TypedDocumentNode<T, OperationVariables>,
  { page, perPage }: PaginationOptions = { page: 1, perPage: 10 },
) {
  return useSuspenseQuery(query, {
    variables: {
      page,
      perPage,
    },
  });
}
