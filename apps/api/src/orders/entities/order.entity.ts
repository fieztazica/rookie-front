import { ObjectType } from '@nestjs/graphql';
import { Order } from 'src/__generated__/order/order.model';
import { Paginated } from 'src/common/graphql/paginated.object';
export { Order };

@ObjectType()
export class PaginatedOrder extends Paginated(Order) {}
