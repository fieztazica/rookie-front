import React from 'react';
import ProductDescription from './product-description';
import { Separator } from '@/components/ui/separator';
import ProductPrice from './product-price';
import ProductReviews from './product-reviews';
import WriteReviewForm from './write-review-form';
import { Product } from '@/src/__generated__/graphql';
import { auth } from '@/auth';

type Props = {
  product: Product;
};

async function ProductDetail({ product }: Props) {
  const session = await auth();
  return (
    <div>
      <div className="text-2xl font-bold mb-6">
        Category:{' '}
        {product?.categories
          .map((a) => a.category.displayName || a.category.name)
          .join(', ')}
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <ProductDescription
            imageUrl={product.imageUrl}
            title={product?.displayName || product?.name}
            author={product?.authors
              .map(
                (a) =>
                  a.author.displayName ||
                  `${a.author.firstName} ${a.author.lastName}`,
              )
              .join(', ')}
            description={product?.description}
          />
        </div>
        <div>
          <ProductPrice
            productId={product.id}
            price={product.price}
            salePrice={product.salePrice}
            customerId={session?.user?.customer_id}
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
