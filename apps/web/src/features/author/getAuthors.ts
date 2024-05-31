import { getClient } from '@/lib/apollo/apollo-client';
import { gql } from '@/src/__generated__';
import { useSuspenseQuery } from '@apollo/client';

export const GET_ALL_AUTHORS = gql(`
    query GetAllAuthors {
        authors {
            id
            firstName
            lastName
            displayName
        }
    }
`);

export function useGetAuthors() {
  return useSuspenseQuery(GET_ALL_AUTHORS, {
    errorPolicy: 'all',
  });
}
