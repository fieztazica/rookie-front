import { GetDetailCartQuery } from '@/src/__generated__/graphql';
import React from 'react';
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
import { Decimal } from 'decimal.js';
import _ from 'lodash';

type Props = {
  cart: GetDetailCartQuery['cart'];
};

function ProductsTable({ cart }: Props) {
  const mapItems = new Map(cart.items.map((i) => [i.key, i.value]));

  const cartTotal = cart.items.reduce((acc, item) => {
    const amount = item.value;
    const product = cart.products.find((p) => p.id == item.key);
    const price = getProductPrice(product);
    return acc.plus(price.mul(amount));
  }, new Decimal(0));

  function calcProductTotal(key: string) {
    const amount = mapItems.get(key);
    const product = cart.products.find((p) => p.id == key);
    if (!product || !amount) return new Decimal(0);
    return getProductPrice(product).mul(amount);
  }

  return (
    <Table>
      <TableCaption>Check your order once again.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Product</TableHead>
          <TableHead className="text-right w-[100px]">Price</TableHead>
          <TableHead className="text-center w-[150px]">Quantity</TableHead>
          <TableHead className="text-right w-[150px]">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cart.items.map(({ key: itemId, value: amount }) => {
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
                      {product?.authors
                        .map(
                          (a) =>
                            a.author.displayName ||
                            `${a.author.firstName} ${a.author.lastName}`,
                        )
                        .join(', ')}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">{price.toNumber()}</TableCell>
              <TableCell className="text-center w-[150px]">{amount}</TableCell>
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

export default ProductsTable;

function getProductPrice(product?: GetDetailCartQuery['cart']['products'][0]) {
    if (!product) return new Decimal(0);
    return new Decimal(
      product?.salePrice < 0 ? product?.price : product?.salePrice || 0,
    );
  }
