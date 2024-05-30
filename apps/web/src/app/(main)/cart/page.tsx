import React from 'react';
import { getClient } from '@/lib/apollo/apollo-client';
import { GET_CART_WITH_PRODUCTS } from '@/src/features/cart/cart.queries';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import CartItemsTable from './cart-items-table';
import { print } from 'graphql';
import { GetCartWithProductsQuery } from '@/src/__generated__/graphql';
import { ApolloQueryResult } from '@apollo/client';

type Props = {};

export const dynamic = 'force-dynamic';

async function getCart(customerId: string) {
  return getClient().query({
    errorPolicy: 'all',
    query: GET_CART_WITH_PRODUCTS,
    variables: {
      customerId,
    },
  });
}

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
    next: { tags: [`cart/${customerId}`] },
  }).then(async (res) => {
    const json = await res.json();
    console.log(json);
    return json;
  })) as ApolloQueryResult<GetCartWithProductsQuery>;
}

// console.log(print(GET_CART_WITH_PRODUCTS));

async function CartPage({}: Props) {
  const session = await auth();

  if (!session?.user?.customer_id) {
    return redirect('/');
  }

  const { data } = await fetchCart(session.user.customer_id);
  if (!data) return <div>No data returns.</div>;
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
