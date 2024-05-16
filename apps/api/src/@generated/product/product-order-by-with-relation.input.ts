import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { ProductToCategoryOrderByRelationAggregateInput } from '../product-to-category/product-to-category-order-by-relation-aggregate.input';
import { OrderItemOrderByRelationAggregateInput } from '../order-item/order-item-order-by-relation-aggregate.input';
import { FeedbackOrderByRelationAggregateInput } from '../feedback/feedback-order-by-relation-aggregate.input';
import { ImageOrderByRelationAggregateInput } from '../image/image-order-by-relation-aggregate.input';
import { ProductToPublisherOrderByRelationAggregateInput } from '../product-to-publisher/product-to-publisher-order-by-relation-aggregate.input';
import { ProductToAuthorOrderByRelationAggregateInput } from '../product-to-author/product-to-author-order-by-relation-aggregate.input';

@InputType()
export class ProductOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    displayName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    @Type(() => SortOrderInput)
    salePrice?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    accountId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ProductToCategoryOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ProductToCategoryOrderByRelationAggregateInput)
    categories?: ProductToCategoryOrderByRelationAggregateInput;

    @Field(() => OrderItemOrderByRelationAggregateInput, {nullable:true})
    @Type(() => OrderItemOrderByRelationAggregateInput)
    orderItems?: OrderItemOrderByRelationAggregateInput;

    @Field(() => FeedbackOrderByRelationAggregateInput, {nullable:true})
    @Type(() => FeedbackOrderByRelationAggregateInput)
    feedbacks?: FeedbackOrderByRelationAggregateInput;

    @Field(() => ImageOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ImageOrderByRelationAggregateInput)
    images?: ImageOrderByRelationAggregateInput;

    @Field(() => ProductToPublisherOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ProductToPublisherOrderByRelationAggregateInput)
    publishers?: ProductToPublisherOrderByRelationAggregateInput;

    @Field(() => ProductToAuthorOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ProductToAuthorOrderByRelationAggregateInput)
    authors?: ProductToAuthorOrderByRelationAggregateInput;
}
