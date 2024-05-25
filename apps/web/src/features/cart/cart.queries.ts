import { gql } from '@/src/__generated__';

export const COUNT_CART_ITEMS = gql(`
    query CountCartItems($customerId: String!) {
        countCartItems(customerId: $customerId)
    }
`);

export const GET_CART = gql(`
    query GetCart($customerId: String!) {
        cart(customerId: $customerId) {
            items {
                key
                value
            }
        }
    }
`);
