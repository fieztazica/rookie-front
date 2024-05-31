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
  if (!data)
    return (
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl">No data returns.</h3>
        <Button asChild>
          <Link href={'/shop'}>Continue shopping</Link>
        </Button>
      </div>
    );

  if (!data.cart)
    return (
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl">No cart found.</h3>
        <Button asChild>
          <Link href={'/shop'}>Continue shopping</Link>
        </Button>
      </div>
    );

  if (!data.cart.items.length)
    return (
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl">Your cart is empty.</h3>
        <Button asChild>
          <Link href={'/shop'}>Continue shopping</Link>
        </Button>
      </div>
    );

  return (
    <div className="w-full flex flex-col space-y-4">
      <div className={'text-xl font-bold'}>
        {`Your cart: ${data.cart.items.length} items`}
      </div>
      <Separator />
      <div className="grid grid-cols-1">
        <div className="col-span-1">
          <CartItemsTable cart={data.cart} />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
