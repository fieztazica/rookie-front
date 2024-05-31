'use client';

import { TypographyH4 } from '@/components/typos/h4';
import { Separator } from '@radix-ui/react-dropdown-menu';
import React from 'react';
import AuthorScrollArea from './components/author-scroll-area';
import CategoryScrollArea from './components/category-scroll-area';
import RatingScrollArea from './components/rating-scroll-area';
import { useSearchParams } from 'next/navigation';

type Props = {
  category: React.ReactNode;
  pagination: React.ReactNode;
  author: React.ReactNode;
  rating: React.ReactNode;
};

function Layout({ pagination, author, category, rating }: Props) {
  const searchParams = useSearchParams();
  const authorParam = searchParams.get('author');
  const categoryParam = searchParams.get('category');
  const ratingParam = searchParams.get('rating');
  const hasParams = authorParam || categoryParam || ratingParam;
  const filteredBy = authorParam
    ? 'author'
    : categoryParam
      ? 'category'
      : ratingParam
        ? 'rating'
        : null;
  const rendered = !hasParams
    ? pagination
    : authorParam
      ? author
      : categoryParam
        ? category
        : ratingParam
          ? rating
          : 'Invalid filter';
  return (
    <div className="flex flex-col pt-8 pb-24 px-24 container mx-auto">
      <div className="sticky top-0 flex space-x-2 items-end">
        <TypographyH4>Books</TypographyH4>
        {filteredBy && (
          <span className="text-primary/70 text-sm">
            Filtered by {filteredBy}
          </span>
        )}
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
        <div className="flex-1">{rendered}</div>
      </div>
    </div>
  );
}

export default Layout;
