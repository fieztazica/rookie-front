import React from 'react';

type Props = {
  params: {
    productId: string;
  };
};

function ProductPage({ params }: Props) {
  return (
    <div className="flex flex-col items-center justify-between p-24 container mx-auto space-y-24">
      Product {params.productId}
    </div>
  );
}

export default ProductPage;
