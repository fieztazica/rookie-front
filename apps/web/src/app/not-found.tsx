import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="p-24 flex items-center justify-center container mx-auto min-h-dvh">
      <div className="text-8xl font-bold -rotate-90">404</div>
      <div className="flex flex-col space-y-4">
        <h2 className="text-4xl font-bold">Not Found</h2>
        <p className="text-sm">Could not find requested resource</p>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
