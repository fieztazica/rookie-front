import { auth } from '@/auth';
import { getOrders } from '@/features/order/getOrders';
import React from 'react';

type Props = {};

async function getCustomerOrders() {
  const session = await auth();
  if (!session || !session.user?.customer_id) throw new Error('Unauthorized');

  return getOrders(session.user?.customer_id);
}

async function OrderPage({}: Props) {
  const { data, error } = await getCustomerOrders();
  return <div>OrderPage</div>;
}

export default OrderPage;
