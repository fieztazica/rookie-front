import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderItemWhereInput } from './order-item-where.input';
import { Type } from 'class-transformer';
import { OrderItemOrderByWithRelationInput } from './order-item-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderItemCountAggregateInput } from './order-item-count-aggregate.input';
import { OrderItemAvgAggregateInput } from './order-item-avg-aggregate.input';
import { OrderItemSumAggregateInput } from './order-item-sum-aggregate.input';
import { OrderItemMinAggregateInput } from './order-item-min-aggregate.input';
import { OrderItemMaxAggregateInput } from './order-item-max-aggregate.input';

@ArgsType()
export class OrderItemAggregateArgs {
  @Field(() => OrderItemWhereInput, { nullable: true })
  @Type(() => OrderItemWhereInput)
  where?: OrderItemWhereInput;

  @Field(() => [OrderItemOrderByWithRelationInput], { nullable: true })
  @Type(() => OrderItemOrderByWithRelationInput)
  orderBy?: Array<OrderItemOrderByWithRelationInput>;

  @Field(() => OrderItemWhereUniqueInput, { nullable: true })
  @Type(() => OrderItemWhereUniqueInput)
  cursor?: Prisma.AtLeast<OrderItemWhereUniqueInput, 'orderId_productId'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => OrderItemCountAggregateInput, { nullable: true })
  @Type(() => OrderItemCountAggregateInput)
  _count?: OrderItemCountAggregateInput;

  @Field(() => OrderItemAvgAggregateInput, { nullable: true })
  @Type(() => OrderItemAvgAggregateInput)
  _avg?: OrderItemAvgAggregateInput;

  @Field(() => OrderItemSumAggregateInput, { nullable: true })
  @Type(() => OrderItemSumAggregateInput)
  _sum?: OrderItemSumAggregateInput;

  @Field(() => OrderItemMinAggregateInput, { nullable: true })
  @Type(() => OrderItemMinAggregateInput)
  _min?: OrderItemMinAggregateInput;

  @Field(() => OrderItemMaxAggregateInput, { nullable: true })
  @Type(() => OrderItemMaxAggregateInput)
  _max?: OrderItemMaxAggregateInput;
}
