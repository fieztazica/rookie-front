'use server';

import { auth } from '@/auth';
import { addToCart } from '@/src/features/cart/addToCart';

export async function addToCartAction(productId:string, quantity:number) {
  try {
    const session = await auth();
    if (!session || !session.user?.customer_id)
      throw new Error('Unauthenticated');

    return addToCart(
      session.user.customer_id,
      productId,
      quantity,
    );
  } catch (e) {
    throw new Error((e as unknown as any).message);
  }
}
