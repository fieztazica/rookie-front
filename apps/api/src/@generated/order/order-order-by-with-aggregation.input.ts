import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OrderCountOrderByAggregateInput } from './order-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { OrderAvgOrderByAggregateInput } from './order-avg-order-by-aggregate.input';
import { OrderMaxOrderByAggregateInput } from './order-max-order-by-aggregate.input';
import { OrderMinOrderByAggregateInput } from './order-min-order-by-aggregate.input';
import { OrderSumOrderByAggregateInput } from './order-sum-order-by-aggregate.input';

@InputType()
export class OrderOrderByWithAggregationInput {
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

  @Field(() => OrderCountOrderByAggregateInput, { nullable: true })
  @Type(() => OrderCountOrderByAggregateInput)
  _count?: OrderCountOrderByAggregateInput;

  @Field(() => OrderAvgOrderByAggregateInput, { nullable: true })
  @Type(() => OrderAvgOrderByAggregateInput)
  _avg?: OrderAvgOrderByAggregateInput;

  @Field(() => OrderMaxOrderByAggregateInput, { nullable: true })
  @Type(() => OrderMaxOrderByAggregateInput)
  _max?: OrderMaxOrderByAggregateInput;

  @Field(() => OrderMinOrderByAggregateInput, { nullable: true })
  @Type(() => OrderMinOrderByAggregateInput)
  _min?: OrderMinOrderByAggregateInput;

  @Field(() => OrderSumOrderByAggregateInput, { nullable: true })
  @Type(() => OrderSumOrderByAggregateInput)
  _sum?: OrderSumOrderByAggregateInput;
}
