import { gql } from '@/src/__generated__';

export const GET_PRODUCTS = gql(`
    query GetProducts {
        products {
            id
            name
            displayName
            authors {
                author {
                    firstName
                    lastName
                }
            }
            salePrice
            imageUrl
            price
        }
    }
`);

export const GET_PRODUCT = gql(`
    query GetProduct($id: String!) {
        product(id: $id) {
            id
            name
            displayName
            description
            imageUrl
            price
        }
    }
`);
