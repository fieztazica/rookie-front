import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function NotFound() {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-4xl font-bold">Failed to product data</h2>
      <p className="text-md font-medium">Could not find requested resource</p>
      <Button asChild>
        <Link href="/">Return home</Link>
      </Button>
    </div>
  );
}
