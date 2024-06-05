'use client';

import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { GetOrdersQuery } from '@/src/__generated__/graphql';
import Decimal from 'decimal.js';
import {
  ChevronsUpDown,
  ChevronsDownUp,
  PencilLine,
  ClipboardMinus,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { formatRelative } from 'date-fns';

type Props = {
  order: GetOrdersQuery['orders'][0];
};

function OrderBox({ order }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="space-y-2 rounded border"
    >
      <div
        className={cn(
          'flex items-center justify-between space-x-4 px-4 bg-accent',
          isOpen && 'border-b',
        )}
      >
        <div>
          <span>
            <span className="font-semibold">Order ID:</span> {order.id}
          </span>
          <span className="text-primary/70 font-medium">
            {' | '}
            {formatRelative(new Date(order.createdAt), new Date())}
          </span>
        </div>
        <div className="flex items-center space-x-2 py-2">
          <span>
            <span className="font-semibold">Total:</span> ${order.total}
          </span>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              {isOpen ? (
                <ChevronsDownUp className="h-4 w-4" />
              ) : (
                <ChevronsUpDown className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="px-4 border-b pb-2 flex justify-between items-center">
          <div>
            {order.orderItems.reduce((acc, item) => acc + item.quantity, 0)}{' '}
            products, {order.orderItems.length} unique products
          </div>
          <Button size="sm">
            <ClipboardMinus className="h-4 w-4 mr-2" />
            Cancel
          </Button>
        </div>
        {order.orderItems.map(({ product, quantity, price: orderPrice }) => {
          const price =
            (product.salePrice || 0) >= 0 ? product.salePrice : product.price;
          const isSamePrice = price === orderPrice;
          const itemTotal = new Decimal(price).mul(quantity).toNumber();
          return (
            <div
              key={`${order.id}_${product.id}`}
              className="px-4 py-4 border-b"
            >
              <div className="flex justify-between items-center">
                <div className="flex">
                  <div className="max-w-32">
                    <img
                      src={product.imageUrl || undefined}
                      alt={`${product.name}'s image`}
                    />
                  </div>
                  <div className="ml-2 flex flex-col items-start justify-center">
                    <div className="font-bold">
                      {product.displayName || product.name}
                    </div>
                    <div>
                      <span className="font-medium">{quantity}x</span>{' '}
                      <span className="space-x-2">
                        <span
                          className={cn(
                            'text-primary/70',
                            !isSamePrice ? 'line-through' : '',
                          )}
                        >
                          ${isSamePrice ? orderPrice : price}
                        </span>
                        {!isSamePrice && (
                          <span className="font-bold">${orderPrice}</span>
                        )}
                      </span>{' '}
                      <span>= ${itemTotal}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <Button asChild>
                    <Link href={`/product/${product.id}`}>
                      <PencilLine className="h-4 w-4 mr-2" /> Buy again
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href={`/product/${product.id}#write-a-review`}>
                      <PencilLine className="h-4 w-4 mr-2" /> Write a review
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}

export default OrderBox;
