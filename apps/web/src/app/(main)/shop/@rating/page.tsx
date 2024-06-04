'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

type Props = {};

function FilterByRatingShop({}: Props) {
  const searchParams = useSearchParams();
  const ratingParam = searchParams.get('rating');
//   const { data } = useGetCategoryProducts(ratingParam);

//   if (!data) return <p>No data</p>;

//   const products =
//     data.category.products.map(
//       (productToCategory) => productToCategory.product,
//     ) || [];

  return (
    <div>
      {/* <ProductList products={products} /> */}
      OrderByRating
    </div>
  );
}

export default FilterByRatingShop;
