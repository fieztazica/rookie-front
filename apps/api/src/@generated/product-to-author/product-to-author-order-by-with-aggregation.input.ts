import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductToAuthorCountOrderByAggregateInput } from './product-to-author-count-order-by-aggregate.input';
import { ProductToAuthorMaxOrderByAggregateInput } from './product-to-author-max-order-by-aggregate.input';
import { ProductToAuthorMinOrderByAggregateInput } from './product-to-author-min-order-by-aggregate.input';

@InputType()
export class ProductToAuthorOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ProductToAuthorCountOrderByAggregateInput, {nullable:true})
    _count?: ProductToAuthorCountOrderByAggregateInput;

    @Field(() => ProductToAuthorMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductToAuthorMaxOrderByAggregateInput;

    @Field(() => ProductToAuthorMinOrderByAggregateInput, {nullable:true})
    _min?: ProductToAuthorMinOrderByAggregateInput;
}
