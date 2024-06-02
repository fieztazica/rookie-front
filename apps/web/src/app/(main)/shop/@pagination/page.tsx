'use client';

import React from 'react';
import ProductList from '@/components/product-list';
import { useSearchParams } from 'next/navigation';
import { useGetProducts } from '@/features/product/useGetProducts';
import PaginBox from '../components/pagin-box';

type Props = {};

function ShopHomePage({}: Props) {
  const searchParams = useSearchParams();
  const options: PaginationOptions = {
    page: parseInt(searchParams.get('page') || '1'),
    perPage: parseInt(searchParams.get('perPage') || '8'),
  };
  const { data, error } = useGetProducts(options);

  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <p>No data</p>;

  const products = data.paginatedProducts.data || [];
  const meta = data.paginatedProducts.meta;

  return (
    <div className="flex flex-col space-y-2 w-full items-center">
      <ProductList products={products} />
      <PaginBox meta={meta} />
    </div>
  );
}

export default ShopHomePage;
