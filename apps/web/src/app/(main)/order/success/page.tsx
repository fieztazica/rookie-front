import React from 'react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CircleCheckBig } from 'lucide-react';
type Props = {};

function SuccessPlaceOrder({}: Props) {
  return (
    <div className="flex flex-col space-y-2 items-center">
      <h3 className="text-xl flex items-center mb-4">
        <CircleCheckBig className="w-8 h-8 text-green-500 mr-2" /> Successfully
        placed your order!
      </h3>
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
}

export default SuccessPlaceOrder;
