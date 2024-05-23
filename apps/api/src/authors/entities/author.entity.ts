import { ObjectType } from '@nestjs/graphql';
import { Author } from 'src/__generated__/author/author.model';
import { Paginated } from 'src/common/graphql/paginated.object';
export { Author };

@ObjectType()
export class PaginatedAuthor extends Paginated(Author) {}
