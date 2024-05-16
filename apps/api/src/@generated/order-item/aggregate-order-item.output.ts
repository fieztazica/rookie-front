import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderItemCountAggregate } from './order-item-count-aggregate.output';
import { OrderItemAvgAggregate } from './order-item-avg-aggregate.output';
import { OrderItemSumAggregate } from './order-item-sum-aggregate.output';
import { OrderItemMinAggregate } from './order-item-min-aggregate.output';
import { OrderItemMaxAggregate } from './order-item-max-aggregate.output';

@ObjectType()
export class AggregateOrderItem {

    @Field(() => OrderItemCountAggregate, {nullable:true})
    _count?: OrderItemCountAggregate;

    @Field(() => OrderItemAvgAggregate, {nullable:true})
    _avg?: OrderItemAvgAggregate;

    @Field(() => OrderItemSumAggregate, {nullable:true})
    _sum?: OrderItemSumAggregate;

    @Field(() => OrderItemMinAggregate, {nullable:true})
    _min?: OrderItemMinAggregate;

    @Field(() => OrderItemMaxAggregate, {nullable:true})
    _max?: OrderItemMaxAggregate;
}
