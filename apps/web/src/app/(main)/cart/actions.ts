'use server';

import { auth } from '@/auth';
import { getClient } from '@/lib/apollo/apollo-client';
import { CartItemInput } from '@/src/__generated__/graphql';
import { UPDATE_CART } from '@/src/features/cart/cart.queries';
import { revalidateTag } from 'next/cache';

export async function refetchCart() {
  try {
    const session = await auth();
    if (!session || !session.user?.customer_id)
      throw new Error('Unauthenticated');

    revalidateTag(`cart/${session.user.customer_id}`);
  } catch (e) {
    throw new Error((e as unknown as any).message);
  }
}

export async function updateCart(items: CartItemInput[]) {
  try {
    const session = await auth();
    if (!session || !session.user?.customer_id)
      throw new Error('Unauthenticated');

    return getClient().mutate({
      errorPolicy: 'all',
      mutation: UPDATE_CART,
      variables: {
        customerId: session.user.customer_id,
        items,
      },
    });
  } catch (e) {
    throw new Error((e as unknown as any).message);
  }
}
