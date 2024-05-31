'use client';

import ProductList from '@/components/product-list';
import { useSearchParams } from 'next/navigation';
import { useGetProducts } from '@/features/product/useGetProducts';
import React from 'react';
import PaginBox from './pagin-box';

type Props = {};

function ShopProducts({}: Props) {
  const searchParams = useSearchParams();
  const options: PaginationOptions = {
    page: parseInt(searchParams.get('page') || '1'),
    perPage: parseInt(searchParams.get('perPage') || '10'),
  };
  const { data, error } = useGetProducts(options);

  console.log(data.paginatedProducts.meta);

  //   if (loading) return <p>Loading...</p>;
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

export default ShopProducts;
