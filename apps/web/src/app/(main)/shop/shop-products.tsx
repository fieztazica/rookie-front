'use client';

import ProductList from '@/components/product-list';
import { useGetProducts } from '@/src/features/product/useGetProducts';
import React from 'react';

type Props = {};

function ShopProducts({}: Props) {
  const { data, error } = useGetProducts();

//   if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return <ProductList products={data?.paginatedProducts.data} />;
}

export default ShopProducts;
