'use server';

import { auth } from '@/auth';
import { addToCart } from '@/features/cart/addToCart';
import { countCartItemsTag } from '@/features/cart/countCartItems';
import { revalidateTag } from 'next/cache';

export async function addToCartAction(productId: string, quantity: number) {
  try {
    const session = await auth();
    if (!session || !session.user?.customer_id)
      throw new Error('Unauthenticated');

    return addToCart(session.user.customer_id, productId, quantity);
  } catch (e) {
    throw new Error((e as unknown as any).message);
  }
}

export async function refetch() {
  try {
    const session = await auth();
    if (!session || !session.user?.customer_id)
      throw new Error('Unauthenticated');

    await revalidateTag(countCartItemsTag(session.user.customer_id));
  } catch (e) {
    throw new Error((e as unknown as any).message);
  }
}
