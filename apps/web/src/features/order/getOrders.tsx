import { getClient } from '@/lib/apollo/apollo-client';
import { gql } from '@/src/__generated__';

export const getOrdersTag = (customerId: string) => {
  return `getOrders/${customerId}`;
};

export const GET_ORDERS = gql(`
    query getOrders($customerId: String!) {
        orders(where: {
            customerId: {
                equals: $customerId
            }
        }) {
            id
            orderItems {
                productId
                product {
                    id
                    name
                    displayName
                    imageUrl
                    price
                    salePrice
                }
                price
                quantity
            }
            total
            createdAt
        }
    }
`);

export async function getOrders(customerId: string) {
  return getClient().query({
    errorPolicy: 'all',
    query: GET_ORDERS,
    variables: {
      customerId,
    },
    context: {
      fetchOptions: {
        next: {
          tags: [getOrdersTag(customerId)],
        },
      },
    },
  });
}
