import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { Type } from 'class-transformer';
import { OrderOrderByWithRelationInput } from './order-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderCountAggregateInput } from './order-count-aggregate.input';
import { OrderAvgAggregateInput } from './order-avg-aggregate.input';
import { OrderSumAggregateInput } from './order-sum-aggregate.input';
import { OrderMinAggregateInput } from './order-min-aggregate.input';
import { OrderMaxAggregateInput } from './order-max-aggregate.input';

@ArgsType()
export class OrderAggregateArgs {

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;

    @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
    @Type(() => OrderOrderByWithRelationInput)
    orderBy?: Array<OrderOrderByWithRelationInput>;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OrderCountAggregateInput, {nullable:true})
    @Type(() => OrderCountAggregateInput)
    _count?: OrderCountAggregateInput;

    @Field(() => OrderAvgAggregateInput, {nullable:true})
    @Type(() => OrderAvgAggregateInput)
    _avg?: OrderAvgAggregateInput;

    @Field(() => OrderSumAggregateInput, {nullable:true})
    @Type(() => OrderSumAggregateInput)
    _sum?: OrderSumAggregateInput;

    @Field(() => OrderMinAggregateInput, {nullable:true})
    @Type(() => OrderMinAggregateInput)
    _min?: OrderMinAggregateInput;

    @Field(() => OrderMaxAggregateInput, {nullable:true})
    @Type(() => OrderMaxAggregateInput)
    _max?: OrderMaxAggregateInput;
}
