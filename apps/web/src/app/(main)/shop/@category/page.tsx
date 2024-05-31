'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useGetCategoryProducts } from '@/features/category/getCategoryProducts';
import ProductList from '@/components/product-list';

type Props = {};

function FilterByCategoryShop({}: Props) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const { data } = useGetCategoryProducts(categoryParam);

  if (!data) return <p>No data</p>;

  const products =
    data.category.products.map(
      (productToCategory) => productToCategory.product,
    ) || [];

  return <div>
    <ProductList products={products} />
  </div>;
}

export default FilterByCategoryShop;
