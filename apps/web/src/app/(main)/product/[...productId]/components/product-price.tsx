'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import AddToCartButton from '@/src/app/(main)/cart/add-to-cart-btn';

type Props = {
  productId: string;
  price: number;
  salePrice: number;
};

function ProductPrice({ productId, price, salePrice }: Props) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (quantity < 1) setQuantity(1);
    const flooredQuantity = Math.floor(quantity);
    if (flooredQuantity !== quantity) setQuantity(flooredQuantity);
  }, [quantity]);

  return (
    <div className="rounded border h-fit">
      <div className="bg-accent border-b rounded px-8 py-2">
        <p className="space-x-2">
          <span
            className={cn(
              'text-lg',
              salePrice >= 0 ? 'line-through text-primary/70' : 'text-primary',
            )}
          >
            ${price}
          </span>
          {salePrice >= 0 && (
            <span className="font-bold text-2xl">${salePrice}</span>
          )}
        </p>
      </div>
      <div className="px-4 py-6 flex items-center justify-center min-h-56">
        <div>
          <Label htmlFor="quantity">Quantity</Label>
          <div className="flex w-full max-w-sm items-center space-x-2 mb-2">
            <div className="flex items-center space-x-2">
              <Button
                className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 disabled:cursor-not-allowed text-primary"
                size="icon"
                type="button"
                disabled={quantity <= 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <MinusIcon className="h-4 w-4" />
              </Button>
              <Input
                name="quantity"
                id="quantity"
                className="max-w-32 w-full text-center"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                placeholder="Quantity"
                type="number"
              />
              <Button
                className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-primary"
                size="icon"
                type="button"
                onClick={() => setQuantity(quantity + 1)}
              >
                <PlusIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <AddToCartButton
            productId={productId}
            quantity={quantity}
            className="w-full"
          >
            Add to cart
          </AddToCartButton>
        </div>
      </div>
    </div>
  );
}

export default ProductPrice;
