'use client';

import { useGetProduct } from '@/src/features/product/useGetProduct';
import React from 'react';
import ProductDescription from './product-description';
import { Separator } from '@/components/ui/separator';
import ProductPrice from './product-price';
import ProductReviews from './product-reviews';
import WriteReviewForm from './write-review-form';

type Props = {
  id: string;
};

function ProductDetail({ id }: Props) {
  const { data, error } = useGetProduct(id);
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <div className="text-2xl font-bold mb-6">
        Category:{' '}
        {data.product?.categories
          .map((a) => a.category.displayName || a.category.name)
          .join(', ')}
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <ProductDescription
            imageUrl={data.product.imageUrl}
            title={data.product?.displayName || data.product?.name}
            author={data.product?.authors
              .map(
                (a) =>
                  a.author.displayName ||
                  `${a.author.firstName} ${a.author.lastName}`,
              )
              .join(', ')}
            description={data.product?.description}
          />
        </div>
        <div>
          <ProductPrice
            price={data.product.price}
            salePrice={data.product.salePrice}
          />
        </div>
        <div className="col-span-2">
          <ProductReviews />
        </div>
        <div>
          <WriteReviewForm />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
