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
`)
