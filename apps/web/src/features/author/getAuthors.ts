import { getClient } from '@/lib/apollo/apollo-client';
import { gql } from '@/src/__generated__';

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

export async function getAuthors() {
  return getClient().query({
    errorPolicy: 'all',
    query: GET_ALL_AUTHORS,
  });
}
