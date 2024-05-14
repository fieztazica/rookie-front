import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { OrderOrderByRelationAggregateInput } from '../order/order-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { FeedbackOrderByRelationAggregateInput } from '../feedback/feedback-order-by-relation-aggregate.input';

@InputType()
export class CustomerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    gender?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    accountId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => OrderOrderByRelationAggregateInput, {nullable:true})
    @Type(() => OrderOrderByRelationAggregateInput)
    orders?: OrderOrderByRelationAggregateInput;

    @Field(() => FeedbackOrderByRelationAggregateInput, {nullable:true})
    @Type(() => FeedbackOrderByRelationAggregateInput)
    feedback?: FeedbackOrderByRelationAggregateInput;
}
