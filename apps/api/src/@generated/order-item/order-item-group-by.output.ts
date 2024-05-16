import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Int } from '@nestjs/graphql';
import { OrderItemCountAggregate } from './order-item-count-aggregate.output';
import { OrderItemAvgAggregate } from './order-item-avg-aggregate.output';
import { OrderItemSumAggregate } from './order-item-sum-aggregate.output';
import { OrderItemMinAggregate } from './order-item-min-aggregate.output';
import { OrderItemMaxAggregate } from './order-item-max-aggregate.output';

@ObjectType()
export class OrderItemGroupBy {
  @Field(() => String, { nullable: false })
  orderId!: string;

  @Field(() => String, { nullable: false })
  productId!: string;

  @Field(() => GraphQLDecimal, { nullable: false })
  price!: Decimal;

  @Field(() => Int, { nullable: false })
  quantity!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => OrderItemCountAggregate, { nullable: true })
  _count?: OrderItemCountAggregate;

  @Field(() => OrderItemAvgAggregate, { nullable: true })
  _avg?: OrderItemAvgAggregate;

  @Field(() => OrderItemSumAggregate, { nullable: true })
  _sum?: OrderItemSumAggregate;

  @Field(() => OrderItemMinAggregate, { nullable: true })
  _min?: OrderItemMinAggregate;

  @Field(() => OrderItemMaxAggregate, { nullable: true })
  _max?: OrderItemMaxAggregate;
}
