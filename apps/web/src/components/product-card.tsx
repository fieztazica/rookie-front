import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { MousePointerClick } from 'lucide-react';

export type ReceivedProduct = {
  name: string;
  id: string;
  displayName?: string | null;
  authors?: {
    author: {
      firstName?: string | null;
      lastName?: string | null;
      displayName?: string | null;
    };
  }[];
  imageUrl?: string | null;
  price?: number | null;
  salePrice?: number | null;
};

type Props = {
  product: ReceivedProduct;
} & React.HTMLAttributes<HTMLDivElement>;

function ProductCard({ product, className, ...props }: Props) {
  return (
    <Card
      className={cn(
        'w-fit transition-all hover:cursor-pointer hover:scale-105 flex flex-col',
        className,
      )}
      {...props}
    >
      <CardHeader className="flex-1">
        <CardTitle>{product.displayName || product.name}</CardTitle>
        <CardDescription>
          {product.authors
            ?.map((a) => a.author)
            .map((a) => a.displayName || `${a.firstName} ${a.lastName}`)
            .join(', ')}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full m-0 px-0 group">
        <img
          src={product.imageUrl || undefined}
          alt={`${product.name}'s image`}
          width={300}
          height={400}
          className="w-full group-hover:brightness-75 transition-all"
        />
        <div className="scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="text-white flex px-4 py-2 rounded bg-transparent items-center w-full justify-center drop-shadow">
            <MousePointerClick className='w-8 h-8 mr-2'/>
            <span className='w-fit font-medium'>Check it out</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <p className="space-x-2">
          <span
            className={cn(
              'text-primary/70',
              (product?.salePrice || 0) >= 0 ? 'line-through' : '',
            )}
          >
            ${product.price}
          </span>
          {(product?.salePrice || 0) >= 0 && (
            <span className="font-bold">${product.salePrice}</span>
          )}
        </p>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
