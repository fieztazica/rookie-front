import { auth } from '@/auth';
import { Separator } from '@/components/ui/separator';
import { GetCartWithProductsQuery } from '@/src/__generated__/graphql';
import { GET_CART_WITH_PRODUCTS } from '@/src/features/cart/cart.queries';
import { ApolloQueryResult } from '@apollo/client';
import { print } from 'graphql';
import { redirect } from 'next/navigation';
import CartItemsTable from './cart-items-table';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type Props = {};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function fetchCart(customerId: string) {
  return (await fetch(`${process.env.API_URL}/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: print(GET_CART_WITH_PRODUCTS),
      variables: {
        customerId,
      },
    }),
    cache: 'no-store',
    next: { tags: [`cart/${customerId}`] },
  }).then((res) => res.json())) as ApolloQueryResult<GetCartWithProductsQuery>;
}

async function CartPage({}: Props) {
  const session = await auth();

  if (!session?.user?.customer_id) {
    return redirect('/');
  }

  const { data } = await fetchCart(session.user.customer_id);
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
