'use server';

import { auth } from '@/auth';
import { countCartItemsTag } from '@/features/cart/countCartItems';
import { createOrder } from '@/features/order/createOrder';
import { CartItemInput } from '@/src/__generated__/graphql';
import { revalidateTag } from 'next/cache';

export async function makeAnOrder(items: {key: string, value: number}[]) {
  try {
    const session = await auth();
    if (!session || !session.user?.customer_id)
      throw new Error('Unauthenticated');

    const res = await createOrder(session.user.customer_id, items);
    console.log(res.data, res.errors)

    await revalidateTag(countCartItemsTag(session.user.customer_id));

    return res;
  } catch (e) {
    throw new Error((e as unknown as any).message);
  }
}
