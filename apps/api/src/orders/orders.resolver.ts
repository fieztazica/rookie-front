import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Order, PaginatedOrder } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { PaginationArgs } from 'src/common/graphql/pagination.args';
import { FindManyOrderArgs } from 'src/__generated__/order/find-many-order.args';

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Mutation(() => Order)
  createOrder(
    @Args('createOrderInput') createOrderInput: CreateOrderInput,
  ): Promise<Order> {
    return this.ordersService.create(createOrderInput);
  }

  @Query(() => [Order], { name: 'orders' })
  async findAll(@Args({ nullable: true }) options?: FindManyOrderArgs) {
    return this.ordersService.findAll(options);
  }

  @Query(() => PaginatedOrder, { name: 'paginatedOrders' })
  async paginatedFindAll(@Args({ nullable: true }) options?: PaginationArgs) {
    return this.ordersService.paginatedFindAll(options);
  }

  @Query(() => Order, { name: 'order' })
  async findOne(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Order> {
    return this.ordersService.findOne(id);
  }

  @Mutation(() => Order)
  updateOrder(
    @Args('updateOrderInput') updateOrderInput: UpdateOrderInput,
  ): Promise<Order> {
    return this.ordersService.update(updateOrderInput.id, updateOrderInput);
  }

  @Mutation(() => Order)
  removeOrder(@Args('id', { type: () => String }) id: string): Promise<Order> {
    return this.ordersService.remove(id);
  }
}
