'use server';

import { auth } from '@/auth';
import { countCartItemsTag } from '@/features/cart/countCartItems';
import { createOrder } from '@/features/order/createOrder';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export async function makeAnOrder(items: { key: string; value: number }[]) {
  const session = await auth();
  if (!session || !session.user?.customer_id)
    throw new Error('Unauthenticated');

  const res = await createOrder(session.user.customer_id, items);
  console.log(res.data, res.errors);

  await revalidateTag(countCartItemsTag(session.user.customer_id));

  redirect('/order/success');
}
