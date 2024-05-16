import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OrderItemCountOrderByAggregateInput } from './order-item-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { OrderItemAvgOrderByAggregateInput } from './order-item-avg-order-by-aggregate.input';
import { OrderItemMaxOrderByAggregateInput } from './order-item-max-order-by-aggregate.input';
import { OrderItemMinOrderByAggregateInput } from './order-item-min-order-by-aggregate.input';
import { OrderItemSumOrderByAggregateInput } from './order-item-sum-order-by-aggregate.input';

@InputType()
export class OrderItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => OrderItemCountOrderByAggregateInput, {nullable:true})
    @Type(() => OrderItemCountOrderByAggregateInput)
    _count?: OrderItemCountOrderByAggregateInput;

    @Field(() => OrderItemAvgOrderByAggregateInput, {nullable:true})
    @Type(() => OrderItemAvgOrderByAggregateInput)
    _avg?: OrderItemAvgOrderByAggregateInput;

    @Field(() => OrderItemMaxOrderByAggregateInput, {nullable:true})
    @Type(() => OrderItemMaxOrderByAggregateInput)
    _max?: OrderItemMaxOrderByAggregateInput;

    @Field(() => OrderItemMinOrderByAggregateInput, {nullable:true})
    @Type(() => OrderItemMinOrderByAggregateInput)
    _min?: OrderItemMinOrderByAggregateInput;

    @Field(() => OrderItemSumOrderByAggregateInput, {nullable:true})
    @Type(() => OrderItemSumOrderByAggregateInput)
    _sum?: OrderItemSumOrderByAggregateInput;
}
