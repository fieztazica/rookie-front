import { auth } from '@/auth';
import FeaturedProducts from '@/src/app/(main)/home/featured-products';
import OnSale from '@/src/app/(main)/home/on-sale';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();
//   console.log('home page', session);
  if (session && (!session?.user?.customer_id))
    return redirect('/welcome');
  return (
    <div className="flex flex-col items-center justify-between p-24 container mx-auto space-y-24">
      <OnSale />
      <FeaturedProducts />
    </div>
  );
}
