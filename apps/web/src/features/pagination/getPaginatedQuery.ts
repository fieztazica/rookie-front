import { getClient } from '@/lib/apollo/apollo-client';
import { DocumentNode, TypedDocumentNode } from '@apollo/client';

export function getPaginatedQuery<T, OperationVariables>(
  query: DocumentNode | TypedDocumentNode<T, OperationVariables>,
  { page, perPage }: PaginationOptions = { page: 1, perPage: 10 },
) {
  return getClient().query({
    query,
    variables: {
      page,
      perPage,
    },
  });
}
