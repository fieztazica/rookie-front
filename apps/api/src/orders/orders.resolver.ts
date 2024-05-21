import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';

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
  async findAll(): Promise<Order[]> {
    return (await this.ordersService.findAll()).data;
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
