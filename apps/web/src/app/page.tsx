import { auth } from '@/auth';
import FeaturedProducts from '@/components/home/featured-products';
import OnSale from '@/components/home/on-sale';

export default async function Page(): Promise<JSX.Element> {
  const session = await auth();
  console.log("session", session)
  return (
    <div className="flex flex-col items-center justify-between p-24 container mx-auto space-y-24">
      <OnSale />
      <FeaturedProducts />
    </div>
  );
}
