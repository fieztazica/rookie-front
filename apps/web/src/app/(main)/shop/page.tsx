import { TypographyH4 } from '@/components/typos/h4';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import ShopProducts from './shop-products';

type Props = {};

function ShopPage({}: Props) {
  return (
    <div className="flex flex-col pt-8 pb-24 px-24 container mx-auto">
      <div className="sticky top-0 flex space-x-2 items-end">
        <TypographyH4>Books</TypographyH4>
        <span className='text-primary/70 text-sm'>Filtered by</span>
      </div>
      <Separator className="my-4" />
      <div className="flex space-x-4">
        <div>
          <div className="mb-2">Filter By</div>
          <div className="space-y-2">
            <ScrollAreaDemo title="Category" />
            <ScrollAreaDemo title="Author" />
            <ScrollAreaDemo title="Rating Review" />
          </div>
        </div>
        <div className="flex-1">
            <ShopProducts/>
        </div>
      </div>
    </div>
  );
}

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

export function ScrollAreaDemo({ title }: { title: string }) {
  return (
    <ScrollArea className="h-52 w-48 rounded-md border">
      <div className="sticky top-0 py-4 backdrop-blur px-4">
        <h4 className="text-sm font-medium leading-none">{title}</h4>
      </div>
      <div className="px-4">
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
}

export default ShopPage;
