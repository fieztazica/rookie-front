import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { OrderCountAggregate } from './order-count-aggregate.output';
import { OrderAvgAggregate } from './order-avg-aggregate.output';
import { OrderSumAggregate } from './order-sum-aggregate.output';
import { OrderMinAggregate } from './order-min-aggregate.output';
import { OrderMaxAggregate } from './order-max-aggregate.output';

@ObjectType()
export class OrderGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  customerId!: string;

  @Field(() => GraphQLDecimal, { nullable: false })
  total!: Decimal;

  @Field(() => Boolean, { nullable: false })
  deleted!: boolean;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => OrderCountAggregate, { nullable: true })
  _count?: OrderCountAggregate;

  @Field(() => OrderAvgAggregate, { nullable: true })
  _avg?: OrderAvgAggregate;

  @Field(() => OrderSumAggregate, { nullable: true })
  _sum?: OrderSumAggregate;

  @Field(() => OrderMinAggregate, { nullable: true })
  _min?: OrderMinAggregate;

  @Field(() => OrderMaxAggregate, { nullable: true })
  _max?: OrderMaxAggregate;
}
