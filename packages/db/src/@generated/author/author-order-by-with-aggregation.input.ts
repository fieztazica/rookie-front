import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AuthorCountOrderByAggregateInput } from './author-count-order-by-aggregate.input';
import { AuthorMaxOrderByAggregateInput } from './author-max-order-by-aggregate.input';
import { AuthorMinOrderByAggregateInput } from './author-min-order-by-aggregate.input';

@InputType()
export class AuthorOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    displayName?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => AuthorCountOrderByAggregateInput, {nullable:true})
    _count?: AuthorCountOrderByAggregateInput;

    @Field(() => AuthorMaxOrderByAggregateInput, {nullable:true})
    _max?: AuthorMaxOrderByAggregateInput;

    @Field(() => AuthorMinOrderByAggregateInput, {nullable:true})
    _min?: AuthorMinOrderByAggregateInput;
}
