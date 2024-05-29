import React from 'react';
import ProductDetail from './product-detail';
import { getClient } from '@/lib/apollo/apollo-client';
import { GET_PRODUCT } from '@/src/features/product/product.queries';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    productId: string;
  };
};

async function getItem(productId: string) {
  return getClient().query({
    errorPolicy: 'all',
    query: GET_PRODUCT,
    variables: { productId: productId },
  });
}

async function ProductPage({ params }: Props) {
  const { data } = await getItem(String(params.productId));
  if (!data) return notFound();
  return (
    <div className="flex flex-col items-center justify-between p-2 md:p-8 lg:p-24 container mx-auto space-y-24">
      <ProductDetail product={data.product} />
    </div>
  );
}

export default ProductPage;
