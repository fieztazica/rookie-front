'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useGetProductsByRating } from '@/features/product/getProductsByRating';
import ProductList from '@/components/product-list';

type Props = {};

function FilterByRatingShop({}: Props) {
  const searchParams = useSearchParams();
  const ratingParam = searchParams.get('rating');
  const { data } = useGetProductsByRating(parseInt(ratingParam || ''));

  if (!data) return <p>No data</p>;

  const products = data.products || [];

  if (!products.length) return <p>No product found.</p>;

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default FilterByRatingShop;
