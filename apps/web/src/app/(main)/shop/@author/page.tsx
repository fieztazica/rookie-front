'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useGetAuthorProducts } from '@/features/author/getAuthorProducts';
import ProductList from '@/components/product-list';

type Props = {};

function FilterByAuthorShop({}: Props) {
  const searchParams = useSearchParams();
  const authorParam = searchParams.get('author');
  const { data } = useGetAuthorProducts(authorParam);

  if (!data) return <p>No data</p>;

  const products =
    data.author.products.map(
      (productToAuthor) => productToAuthor.product,
    ) || [];

  return <div>
    <ProductList products={products} />
  </div>;
}

export default FilterByAuthorShop;
