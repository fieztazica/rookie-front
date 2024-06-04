'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import React, { useState } from 'react';
import { makeAnOrder } from '../actions';
import { CartItemInput } from '@/src/__generated__/graphql';
import { toast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

type Props = {
  cartItems: CartItemInput[];
} & ButtonProps;

function PlaceOrderButton({ cartItems }: Props) {
  const [isPending, setIsPending] = useState(false);
  async function handleOnClick() {
    try {
      setIsPending(true);
      const { data } = await makeAnOrder(
        cartItems.map((i) => ({ key: i.key, value: i.value })),
      );
      if (!data) {
        throw new Error('Unknown error');
      }
      toast({
        title: 'Success',
        description: 'Placed your order!',
      });
    } catch (e) {
      console.error(e);
      toast({
        title: 'Oh oh! Something went wrong.',
        description: 'Failed to place your order.',
        variant: 'destructive',
      });
    } finally {
      setIsPending(false);
    }
  }
  return <Button onClick={handleOnClick}>Place order</Button>;
}

export default PlaceOrderButton;
