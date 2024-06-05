'use server';

import { auth } from '@/auth';
import { CartItemInput } from '@/src/__generated__/graphql';
import { countCartItemsTag } from '@/features/cart/countCartItems';
import { updateCart } from '@/features/cart/updateCart';
import { revalidateTag } from 'next/cache';
import { getCartTag } from '@/features/cart/getCart';
import { addToCart } from '@/features/cart/addToCart';

export async function makeUpdateCart(items: CartItemInput[]) {
  const session = await auth();
  if (!session || !session.user?.customer_id)
    throw new Error('Unauthenticated');

  const mutated = await updateCart(session.user.customer_id, items);

  await revalidateTag(countCartItemsTag(session.user.customer_id));
  await revalidateTag(getCartTag(session.user.customer_id));

  return mutated;
}

export async function addToCartAction(productId: string, quantity: number) {
  try {
    const session = await auth();
    if (!session || !session.user?.customer_id)
      throw new Error('Unauthenticated');

    const res = await addToCart(session.user.customer_id, productId, quantity);

    await revalidateTag(countCartItemsTag(session.user.customer_id));

    return res;
  } catch (e) {
    console.error(e);
    return {
      errors: [(e as unknown as any).message],
    };
  }
}
