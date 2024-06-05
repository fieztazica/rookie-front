import { auth } from '@/auth';
import { getOrders } from '@/features/order/getOrders';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import OrderBox from './order-box';

type Props = {};

async function getCustomerOrders() {
  const session = await auth();
  if (!session || !session.user?.customer_id) throw new Error('Unauthorized');

  return getOrders(session.user?.customer_id);
}

async function OrderManagePage({}: Props) {
  const { data } = await getCustomerOrders();
  if (!data || !data.orders.length) return <div>No orders.</div>;
  return (
    <div className="w-full">
      <div className={'text-xl font-bold'}>
        {`Your orders: ${data.orders.length} orders`}
      </div>
      <Separator className="my-4" />
      <div className="space-y-4">
        {data.orders.map((order) => {
          return (
            <div key={order.id}>
              <OrderBox order={order} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrderManagePage;
