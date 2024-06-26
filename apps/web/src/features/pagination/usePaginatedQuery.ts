import {
  DocumentNode,
  TypedDocumentNode,
  useSuspenseQuery,
} from '@apollo/client';

export function usePaginatedQuery<T, OperationVariables>(
  query: DocumentNode | TypedDocumentNode<T, OperationVariables>,
  { page, perPage }: PaginationOptions = { page: 1, perPage: 10 },
) {
  return useSuspenseQuery(query, {
    errorPolicy: "all",
    variables: {
      page,
      perPage,
    },
  });
}
