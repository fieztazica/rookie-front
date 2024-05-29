import { auth } from '@/auth';
import { COUNT_CART_ITEMS } from '@/src/features/cart/cart.queries';
import { getClient } from '@/lib/apollo/apollo-client';

export async function countCartItems() {
  const session = await auth();
  if (!session || !session.user?.customer_id) return 'Cart';
  const { data, error } = await getClient().query({
    errorPolicy: 'all',
    query: COUNT_CART_ITEMS,
    variables: { customerId: session.user.customer_id },
  });
  if (error) return 'Cart';
  return `Cart (${data?.countCartItems || 0})`;
}
