import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Order, PaginatedOrder } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { PaginationArgs } from 'src/common/graphql/pagination.args';
import { FindManyOrderArgs } from 'src/__generated__/order/find-many-order.args';
import { CartItemInput } from 'src/cart/dto/cart-item.input';
import { OrderItem } from 'src/__generated__/order-item/order-item.model';

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Mutation(() => Order)
  createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    return this.ordersService.create(createOrderInput);
  }

  @Mutation(() => Order)
  makeOrder(
    @Args('customerId', { type: () => String }) customerId: string,
    @Args('cartItems', { type: () => [CartItemInput] })
    cartItems: CartItemInput[],
  ) {
    return this.ordersService.make(customerId, cartItems);
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
  async findOne(@Args('id', { type: () => String }) id: string) {
    return this.ordersService.findOne(id);
  }

  @ResolveField('orderItems', () => [OrderItem])
  getOrderItems(@Parent() order: Order) {
    const { id } = order;
    return this.ordersService.getOrderItems(id);
  }

  @Mutation(() => Order)
  updateOrder(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
    return this.ordersService.update(updateOrderInput.id, updateOrderInput);
  }

  @Mutation(() => Order)
  removeOrder(@Args('id', { type: () => String }) id: string) {
    return this.ordersService.remove(id);
  }
}
