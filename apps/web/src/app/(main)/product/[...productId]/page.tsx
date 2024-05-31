import { Separator } from '@/components/ui/separator';
import { getProduct } from '@/features/product/getProduct';
import { notFound } from 'next/navigation';
import ProductDescription from './components/product-description';
import ProductPrice from './components/product-price';
import ProductReviews from './components/product-reviews';
import WriteReviewForm from './components/write-review-form';

type Props = {
  params: {
    productId: string;
  };
};

async function ProductPage({ params }: Props) {
  const { data } = await getProduct(String(params.productId));
  if (!data) return notFound();
  const { product } = data;
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
          />
        </div>
        <div className="col-span-2">
          <ProductReviews productId={product.id} />
        </div>
        <div>
          <WriteReviewForm productId={product.id}/>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
