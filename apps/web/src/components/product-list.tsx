'use client';

import React from 'react';
import { useGetProducts } from '../features/product/useGetProducts';
import ProductCard from './product-card';

type Props = {};

function ProductList({}: Props) {
  const { data, loading, error } = useGetProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data?.products.map((p) => (
        <div key={`product_${p.id}`}>
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
