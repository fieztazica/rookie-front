'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { GetCartWithProductsQuery } from '@/src/__generated__/graphql';
import { useDebounce } from '@uidotdev/usehooks';
import { Decimal } from 'decimal.js';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useMap } from 'usehooks-ts';
import { updateCart } from './actions';
import _ from 'lodash';
type Props = {
  cart: GetCartWithProductsQuery['cart'];
};

function CartItemsTable({ cart }: Props) {
  const [mapItems, actionsMapItems] = useMap(
    cart.items.map((i) => [i.key, i.value]),
  );
  const debouncedMapItems = useDebounce(mapItems, 1000);

  function calcProductTotal(key: string) {
    const amount = debouncedMapItems.get(key);
    const product = cart.products.find((p) => p.id == key);
    if (!product || !amount) return new Decimal(0);
    return getProductPrice(product).mul(amount);
  }

  const cartTotal = Array.from(debouncedMapItems.entries()).reduce(
    (acc, item) => {
      const amount = item[1];
      const product = cart.products.find((p) => p.id == item[0]);
      const price = getProductPrice(product);
      return acc.plus(price.mul(amount));
    },
    new Decimal(0),
  );

  useEffect(() => {
    const debouncedMapObjectItems = Array.from(debouncedMapItems.entries()).map(
      ([key, value]) => ({
        key,
        value,
      }),
    );
    if (_.isEqual(cart.items, debouncedMapObjectItems)) return;
    updateCart(debouncedMapObjectItems);
  }, [debouncedMapItems]);

  useEffect(() => {
    actionsMapItems.setAll(cart.items.map((i) => [i.key, i.value]));
  }, [cart]);

  return (
    <Table>
      <TableCaption>A list of your cart items.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Product</TableHead>
          <TableHead className="text-right w-[100px]">Price</TableHead>
          <TableHead className="text-center w-[150px]">Quantity</TableHead>
          <TableHead className="text-right w-[150px]">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from(mapItems.entries()).map(([itemId, amount]) => {
          const product = cart.products.find(
            (p) => p.id == (itemId as unknown as string),
          );
          const price = getProductPrice(product);
          return (
            <TableRow key={itemId as unknown as string}>
              <TableCell className="w-[200px]">
                <div className="flex space-x-2 items-center">
                  <div className="aspect-auto w-[64px]">
                    <img
                      src={product?.imageUrl || undefined}
                      alt={`${product?.name}'s image`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">
                      {product?.displayName || product?.name}
                    </div>
                    <div className="text-sm">
                      {product?.authors.map(
                        (a) =>
                          a.author.displayName ||
                          `${a.author.firstName} ${a.author.lastName}`,
                      )}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">{price.toNumber()}</TableCell>
              <TableCell className="text-center w-[150px]">
                <div className="flex space-x-1 items-center justify-center">
                  <Button
                    size="icon"
                    onClick={() => {
                      if (amount >= 1) actionsMapItems.set(itemId, amount - 1);
                    }}
                    disabled={amount <= 0}
                  >
                    <MinusIcon className="h-4 w-4" />
                  </Button>
                  <Input
                    value={amount}
                    className="w-[50px]"
                    onChange={(e) => {
                      const parsedValue = parseInt(e.target.value || '0');
                      const amountToSet = isNaN(parsedValue)
                        ? 1
                        : parsedValue < 0
                          ? 0
                          : parsedValue;
                      actionsMapItems.set(itemId, amountToSet);
                    }}
                  />
                  <Button
                    size="icon"
                    onClick={() => {
                      actionsMapItems.set(itemId, amount + 1);
                    }}
                  >
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
              <TableCell className="text-right w-[150px]">
                {calcProductTotal(itemId).toNumber()}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right w-[150px]">
            ${cartTotal.toNumber()}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default CartItemsTable;

function getProductPrice(
  product?: GetCartWithProductsQuery['cart']['products'][0],
) {
  if (!product) return new Decimal(0);
  return new Decimal(
    product?.salePrice < 0 ? product?.price : product?.salePrice || 0,
  );
}
