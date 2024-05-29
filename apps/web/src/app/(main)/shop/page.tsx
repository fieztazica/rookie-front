import { TypographyH4 } from '@/components/typos/h4';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import ShopProducts from './shop-products';
import AuthorScrollArea from './author-scroll-area';
import RatingScrollArea from './rating-scroll-area';
import CategoryScrollArea from './category-scroll-area';

type Props = {};

function ShopPage({}: Props) {
  return (
    <div className="flex flex-col pt-8 pb-24 px-24 container mx-auto">
      <div className="sticky top-0 flex space-x-2 items-end">
        <TypographyH4>Books</TypographyH4>
        <span className="text-primary/70 text-sm">Filtered by</span>
      </div>
      <Separator className="my-4" />
      <div className="flex space-x-4">
        <div>
          <div className="mb-2">Filter By</div>
          <div className="space-y-2">
            <CategoryScrollArea />
            <AuthorScrollArea />
            <RatingScrollArea />
          </div>
        </div>
        <div className="flex-1">
          <ShopProducts />
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
