'use server';

import { auth } from '@/auth';
import { CartItemInput } from '@/src/__generated__/graphql';
import { countCartItemsTag } from '@/features/cart/countCartItems';
import { updateCart } from '@/features/cart/updateCart';
import { revalidateTag } from 'next/cache';

export async function makeUpdateCart(items: CartItemInput[]) {
  try {
    const session = await auth();
    if (!session || !session.user?.customer_id)
      throw new Error('Unauthenticated');

    const mutated = await updateCart(session.user.customer_id, items);

    await revalidateTag(countCartItemsTag(session.user.customer_id));
    await revalidateTag( `cart/${session.user.customer_id}`);

    return mutated;
  } catch (e) {
    throw new Error((e as unknown as any).message);
  }
}
