import { gql } from '@/src/__generated__';
import { getClient } from '@/lib/apollo/apollo-client';

export const GET_ALL_CATEGORIES = gql(`
    query GetAllCategories {
        categories {
            id
            name
            displayName
        }
    }
`);

export async function getCategories() {
  return getClient().query({
    errorPolicy: 'all',
    query: GET_ALL_CATEGORIES,
  });
}
