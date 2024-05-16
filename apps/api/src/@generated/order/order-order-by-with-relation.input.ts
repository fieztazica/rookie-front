import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CustomerOrderByWithRelationInput } from '../customer/customer-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { OrderItemOrderByRelationAggregateInput } from '../order-item/order-item-order-by-relation-aggregate.input';

@InputType()
export class OrderOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  customerId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  total?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deleted?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => CustomerOrderByWithRelationInput, { nullable: true })
  @Type(() => CustomerOrderByWithRelationInput)
  customer?: CustomerOrderByWithRelationInput;

  @Field(() => OrderItemOrderByRelationAggregateInput, { nullable: true })
  @Type(() => OrderItemOrderByRelationAggregateInput)
  orderItems?: OrderItemOrderByRelationAggregateInput;
}
