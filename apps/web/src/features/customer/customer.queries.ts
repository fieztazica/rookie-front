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
