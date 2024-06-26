import Link from 'next/link';
import ProductCard, { type ReceivedProduct } from './product-card';

type Props = {
  products: ReceivedProduct[];
};

function ProductList({ products }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((p) => (
        <Link key={`product_${p.id}`} href={`/product/${p.id}`}>
          <ProductCard product={p} className={'h-full'} />
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
