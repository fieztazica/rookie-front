'use client'

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Product } from '../__generated__/graphql';
import ProductCard from './product-card';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

type Props = {
  products: Product[];
};

function ProductCarousel({ products }: Props) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {products.map((p, index) => (
          <CarouselItem
            key={index}
            className="basis-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-4"
          >
            <Link href={`/product/${p.id}`} className="p-1">
              <ProductCard product={p} />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ProductCarousel;
