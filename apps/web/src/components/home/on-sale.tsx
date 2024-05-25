'use client';

import React from 'react';
import { TypographyH3 } from '../typos/h3';
import { Button } from '../ui/button';
import { useGetProducts } from '@/src/features/product/useGetProducts';
import ProductCarousel from '../product-carousel';

type Props = {};

function OnSale({}: Props) {
  const { data,  error } = useGetProducts();

//   if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <section>
      <div className="flex items-center justify-between w-full">
        <TypographyH3>On Sale</TypographyH3>
        <Button>View All</Button>
      </div>
      <div>
        <ProductCarousel products={data?.products.data} />
      </div>
    </section>
  );
}

export default OnSale;
