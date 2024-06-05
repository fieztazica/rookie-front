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

function PlaceOrderButton({
  cartItems,
  children = 'Place order',
  ...props
}: Props) {
  const [isPending, setIsPending] = useState(false);
  async function handleOnClick() {
    try {
      setIsPending(true);
      await makeAnOrder(cartItems.map((i) => ({ key: i.key, value: i.value })));
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
  return (
    <Button onClick={handleOnClick} disabled={isPending} {...props}>
      {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}

export default PlaceOrderButton;
