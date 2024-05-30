import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Product } from '../__generated__/graphql';

type Props = {
  product: Product;
} & React.HTMLAttributes<HTMLDivElement>;

function ProductCard({ product, className, ...props }: Props) {
  return (
    <Card
      className={cn(
        'w-fit transition-all hover:cursor-pointer hover:scale-105',
        className,
      )}
      {...props}
    >
      <CardHeader>
        <CardTitle>{product.displayName || product.name}</CardTitle>
        <CardDescription>
          {product.authors?.map((a) => a.author.firstName).join(', ')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={product.imageUrl || undefined}
          alt={`${product.name}'s image`}
          width={300}
          height={400}
          className="w-full"
        />
      </CardContent>
      <CardFooter>
        <p className="space-x-2">
          <span
            className={cn(
              'text-primary/70',
              product.salePrice >= 0 ? 'line-through' : '',
            )}
          >
            ${product.price}
          </span>
          {product.salePrice >= 0 && (
            <span className="font-bold">${product.salePrice}</span>
          )}
        </p>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
