import { gql } from '@/src/__generated__';
import { useSuspenseQuery } from '@apollo/client';

export const GET_ALL_CATEGORIES = gql(`
    query GetAllCategories {
        categories {
            id
            name
            displayName
        }
    }
`);

export function useGetCategories() {
  return useSuspenseQuery(GET_ALL_CATEGORIES, {
    errorPolicy: 'all',
  });
}
