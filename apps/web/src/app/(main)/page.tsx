import FeaturedProducts from '@/src/app/(main)/home/featured-products';
import OnSale from '@/src/app/(main)/home/on-sale';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-between p-24 container mx-auto space-y-24">
      <OnSale />
      <FeaturedProducts />
    </div>
  );
}
