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

export const ADD_TO_CART = gql(`
    mutation AddToCart($customerId: String!, $productId: String!, $amount: Int!) {
        addCartItem(
            customerId: $customerId,
            input: {
                key: $productId,
                value: $amount
            }) {
                items {
                    key
                    value
                }
            }
    }
`);
