import { getClient } from '@/lib/apollo/apollo-client';
import { gql } from '@/src/__generated__';

export const countCartItemsTag = (customerId: string) =>
  `countCartItems/${customerId}`;

export const COUNT_CART_ITEMS = gql(`
    query CountCartItems($customerId: String!) {
        countCartItems(customerId: $customerId)
    }
`);

export async function getCountCartItems(customerId?: string) {
  if (!customerId) return null;
  return getClient().query({
    query: COUNT_CART_ITEMS,
    variables: {
      customerId,
    },
    context: {
      fetchOptions: {
        next: { tags: [countCartItemsTag(customerId)] },
      },
    },
  });
}
