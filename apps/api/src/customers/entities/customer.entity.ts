import { ObjectType } from '@nestjs/graphql';
import { Customer } from 'src/__generated__/customer/customer.model';
import { Paginated } from 'src/common/graphql/paginated.object';
export { Customer };

@ObjectType()
export class PaginatedCustomer extends Paginated(Customer) {}
