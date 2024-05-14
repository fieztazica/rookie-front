import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductToCategoryCountOrderByAggregateInput } from './product-to-category-count-order-by-aggregate.input';
import { ProductToCategoryMaxOrderByAggregateInput } from './product-to-category-max-order-by-aggregate.input';
import { ProductToCategoryMinOrderByAggregateInput } from './product-to-category-min-order-by-aggregate.input';

@InputType()
export class ProductToCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ProductToCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: ProductToCategoryCountOrderByAggregateInput;

    @Field(() => ProductToCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductToCategoryMaxOrderByAggregateInput;

    @Field(() => ProductToCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: ProductToCategoryMinOrderByAggregateInput;
}
