import { ObjectType } from '@nestjs/graphql';
import { Category } from 'src/__generated__/category/category.model';
import { Paginated } from 'src/common/graphql/paginated.object';
export { Category };

@ObjectType()
export class PaginatedCategory extends Paginated(Category) {}
