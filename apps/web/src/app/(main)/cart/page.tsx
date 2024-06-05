import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import CartItemsTable from './cart-items-table';
import { getDetailCart } from '@/features/cart/getDetailCart';

type Props = {};

async function CartPage({}: Props) {
  const session = await auth();

  if (!session?.user?.customer_id) {
    return redirect('/');
  }

  const { data } = await getDetailCart(session.user.customer_id);

  if (!data || !data.cart || !data.cart.items.length)
    return (
      <div className="flex flex-col space-y-2 items-center">
        <h3 className="text-xl">Your cart is empty.</h3>
        <div className="flex space-x-2">
          <Button asChild variant="outline">
            <Link href={'/order/manage'}>Manage your orders</Link>
          </Button>
          <Button asChild>
            <Link href={'/shop'}>Continue shopping</Link>
          </Button>
        </div>
      </div>
    );

  return (
    <div className="w-full flex flex-col space-y-4">
      <div className={'text-xl font-bold'}>
        {`Your cart: ${data.cart.items.length} items`}
      </div>
      <Separator />
      <div className="w-full">
        <CartItemsTable cart={data.cart} />
        <div className="text-right">
          <Button asChild>
            <Link href={'/order/confirm'}>Confirm your order</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
