import { getOnSaleProducts } from '@/features/product/getOnSaleProducts';
import Link from 'next/link';
import ProductCarousel from '../../../components/product-carousel';
import { TypographyH3 } from '../../../components/typos/h3';
import { Button } from '../../../components/ui/button';

type Props = {};

async function OnSale({}: Props) {
  const { data, error } = await getOnSaleProducts();

  //   if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <p>No data.</p>;

  if (!data.products.length) return null;

  return (
    <section className="w-full">
      <div className="flex items-center justify-between w-full">
        <TypographyH3>On Sale</TypographyH3>
        <Button asChild>
          <Link href={'/shop'}>View all</Link>
        </Button>
      </div>
      <div>
        <ProductCarousel products={data?.products} />
      </div>
    </section>
  );
}

export default OnSale;
