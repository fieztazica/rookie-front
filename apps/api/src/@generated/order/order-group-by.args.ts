import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { Type } from 'class-transformer';
import { OrderOrderByWithAggregationInput } from './order-order-by-with-aggregation.input';
import { OrderScalarFieldEnum } from './order-scalar-field.enum';
import { OrderScalarWhereWithAggregatesInput } from './order-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { OrderCountAggregateInput } from './order-count-aggregate.input';
import { OrderAvgAggregateInput } from './order-avg-aggregate.input';
import { OrderSumAggregateInput } from './order-sum-aggregate.input';
import { OrderMinAggregateInput } from './order-min-aggregate.input';
import { OrderMaxAggregateInput } from './order-max-aggregate.input';

@ArgsType()
export class OrderGroupByArgs {
  @Field(() => OrderWhereInput, { nullable: true })
  @Type(() => OrderWhereInput)
  where?: OrderWhereInput;

  @Field(() => [OrderOrderByWithAggregationInput], { nullable: true })
  @Type(() => OrderOrderByWithAggregationInput)
  orderBy?: Array<OrderOrderByWithAggregationInput>;

  @Field(() => [OrderScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof OrderScalarFieldEnum>;

  @Field(() => OrderScalarWhereWithAggregatesInput, { nullable: true })
  @Type(() => OrderScalarWhereWithAggregatesInput)
  having?: OrderScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => OrderCountAggregateInput, { nullable: true })
  @Type(() => OrderCountAggregateInput)
  _count?: OrderCountAggregateInput;

  @Field(() => OrderAvgAggregateInput, { nullable: true })
  @Type(() => OrderAvgAggregateInput)
  _avg?: OrderAvgAggregateInput;

  @Field(() => OrderSumAggregateInput, { nullable: true })
  @Type(() => OrderSumAggregateInput)
  _sum?: OrderSumAggregateInput;

  @Field(() => OrderMinAggregateInput, { nullable: true })
  @Type(() => OrderMinAggregateInput)
  _min?: OrderMinAggregateInput;

  @Field(() => OrderMaxAggregateInput, { nullable: true })
  @Type(() => OrderMaxAggregateInput)
  _max?: OrderMaxAggregateInput;
}
