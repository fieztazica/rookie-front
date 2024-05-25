'use client';

import { useCountCartItems } from '@/src/features/cart/useCountCartItems';
import React from 'react';

type Props = {};

function Cart({}: Props) {
  const { data, error } = useCountCartItems();
  if (error) return 'Cart';
  return <>Cart ({data?.countCartItems || 0})</>;
}

export default Cart;
