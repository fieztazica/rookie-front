import { getClient } from '@/lib/apollo/apollo-client';
import { gql } from '@/src/__generated__';

export const GET_CUSTOMER_BY_EMAIL = gql(`
    query GetCustomerByEmail($email: String!) {
        getCustomerByEmail (email: $email) {
            id
            firstName
            lastName
            displayName
            email
        }
    }
`);

export async function getCustomerByEmail(email: string) {
  return getClient().query({
    errorPolicy: 'all',
    query: GET_CUSTOMER_BY_EMAIL,
    variables: { email },
  });
}
