import { auth } from '@/auth';
import { getDetailCart } from '@/features/cart/getDetailCart';
import { redirect } from 'next/navigation';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import ProductsTable from '../components/products-table';
import PlaceOrderButton from './place-order-btn';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Props = {};

async function OrderConfirmPage({}: Props) {
  const session = await auth();

  if (!session?.user?.customer_id) {
    return redirect('/');
  }
  const { data } = await getDetailCart(session.user.customer_id);

  if (!data || !data.cart || !data.cart.items.length) return redirect('/cart');

  return (
    <div className="w-full">
      <div className={'text-xl font-bold'}>
        {`Your order: ${data.cart.items.length} items`}
      </div>
      <Separator className="my-4" />
      <div>
        <ProductsTable cart={data.cart} />

        <div className="flex justify-between">
          <div>
            <Select>
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Select your payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="credit-card">Credit Card</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex space-x-2">
            <Button asChild variant="outline">
              <Link href={'/cart'}>Adjust order</Link>
            </Button>
            <PlaceOrderButton cartItems={data.cart.items} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmPage;
