'use client';

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Product } from '../__generated__/graphql';
import ProductCard, { ReceivedProduct } from './product-card';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

type Props = {
  products: ReceivedProduct[];
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
      <CarouselContent className="h-fit m-4">
        {products.map((p, index) => (
          <CarouselItem
            key={index}
            className="basis-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pt-4 pb-16"
          >
            <div className="p-1 h-full">
              <Link href={`/product/${p.id}`}>
                <ProductCard product={p} className="h-full" />
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ProductCarousel;
