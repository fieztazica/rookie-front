'use server';

import { auth } from '@/auth';
import { countCartItemsTag } from '@/features/cart/countCartItems';
import { revalidateTag } from 'next/cache';
import { ReviewSchema } from './schema';
import { z } from 'zod';
import { createFeedback } from '@/features/feedback/createFeedback';

export async function feedback(
  productId: string,
  { rating, ...data }: z.infer<typeof ReviewSchema>,
) {
  const session = await auth();
  if (!session || !session.user?.customer_id)
    throw new Error('Unauthenticated');

  return createFeedback({
    customerId: session.user.customer_id,
    productId,
    rating: parseInt(rating),
    ...data,
  });
}

export async function refetch() {
  const session = await auth();
  if (!session || !session.user?.customer_id)
    throw new Error('Unauthenticated');

  await revalidateTag(countCartItemsTag(session.user.customer_id));
}
