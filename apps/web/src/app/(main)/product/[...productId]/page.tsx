import React from 'react';
import ProductDetail from './product-detail';

type Props = {
  params: {
    productId: string;
  };
};

function ProductPage({ params }: Props) {
  return (
    <div className="flex flex-col items-center justify-between p-2 md:p-8 lg:p-24 container mx-auto space-y-24">
        <ProductDetail id={params.productId} />
    </div>
  );
}

export default ProductPage;
