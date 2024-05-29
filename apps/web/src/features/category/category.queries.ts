import { gql } from '@/src/__generated__';

export const GET_ALL_CATEGORIES = gql(`
    query GetAllCategories {
        categories {
            id
            name
            displayName
        }
    }
`)
