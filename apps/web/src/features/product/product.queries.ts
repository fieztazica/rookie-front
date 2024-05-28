import { gql } from '@/src/__generated__';

export const GET_PRODUCTS = gql(`
    query GetProducts($page: Int, $perPage: Int) {
        paginatedProducts(page: $page, perPage: $perPage) {
            data {
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
            meta {
                total
                currentPage
                perPage
            }
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
            salePrice
            authors {
                author {
                    firstName
                    lastName
                    displayName
                }
            }
            categories {
                category {
                    name
                    displayName
                }
            }
        }
    }
`);
