import ProductList from '@/components/product-list';

export default async function Page(): Promise<JSX.Element> {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <ProductList />
    </div>
  );
}
