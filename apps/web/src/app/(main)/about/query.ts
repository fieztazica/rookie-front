import { getClient } from '@/lib/apollo/apollo-client';
import { gql } from '@/src/__generated__';

export const GET_ABOUT = gql(`
    query getAbout {
        config(key: "about") {
            value
        }
    }
`);

export async function getAbout() {
  return getClient().query({
    errorPolicy: 'all',
    query: GET_ABOUT,
  });
}
