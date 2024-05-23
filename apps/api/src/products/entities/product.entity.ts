import { ObjectType } from '@nestjs/graphql';
import { Product } from 'src/__generated__/product/product.model';
import { Paginated } from 'src/common/graphql/paginated.object';
export { Product };

@ObjectType()
export class PaginatedProduct extends Paginated(Product) {}
