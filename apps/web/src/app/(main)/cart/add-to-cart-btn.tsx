'use client';

import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Button, ButtonProps } from '@/components/ui/button';
import { addToCartAction } from './actions';
import { Loader2 } from 'lucide-react';

type Props = {
  productId: string;
  quantity: number;
} & ButtonProps;

function AddToCartButton({
  productId,
  quantity,
  children = 'Add to cart',
  ...props
}: Props) {
  const [isPending, setIsPending] = useState(false);
  const onAddToCartClick = async () => {
    try {
      setIsPending(true);
      const res = await addToCartAction(productId, quantity);
      if (res.errors?.length) {
        console.error(res.errors);
        throw new Error(
          res?.errors?.[0]?.message || res?.errors?.[0] || 'unknown error',
        );
      }
      toast({
        title: 'Success',
        description: 'Product added to cart',
      });
    } catch (e) {
      console.error(e);
      toast({
        title: 'Oh oh! Something went wrong.',
        description:
          (e as unknown as any).message || 'Failed to add product to cart.',
        variant: 'destructive',
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Button onClick={onAddToCartClick} disabled={isPending} {...props}>
      {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}

export default AddToCartButton;
