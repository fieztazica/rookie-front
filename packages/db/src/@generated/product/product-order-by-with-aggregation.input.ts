import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { Type } from 'class-transformer';
import { ProductCountOrderByAggregateInput } from './product-count-order-by-aggregate.input';
import { ProductAvgOrderByAggregateInput } from './product-avg-order-by-aggregate.input';
import { ProductMaxOrderByAggregateInput } from './product-max-order-by-aggregate.input';
import { ProductMinOrderByAggregateInput } from './product-min-order-by-aggregate.input';
import { ProductSumOrderByAggregateInput } from './product-sum-order-by-aggregate.input';

@InputType()
export class ProductOrderByWithAggregationInput {

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

    @Field(() => SortOrder, {nullable:true})
    ratings?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    accountId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    storeQuantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ProductCountOrderByAggregateInput, {nullable:true})
    @Type(() => ProductCountOrderByAggregateInput)
    _count?: ProductCountOrderByAggregateInput;

    @Field(() => ProductAvgOrderByAggregateInput, {nullable:true})
    @Type(() => ProductAvgOrderByAggregateInput)
    _avg?: ProductAvgOrderByAggregateInput;

    @Field(() => ProductMaxOrderByAggregateInput, {nullable:true})
    @Type(() => ProductMaxOrderByAggregateInput)
    _max?: ProductMaxOrderByAggregateInput;

    @Field(() => ProductMinOrderByAggregateInput, {nullable:true})
    @Type(() => ProductMinOrderByAggregateInput)
    _min?: ProductMinOrderByAggregateInput;

    @Field(() => ProductSumOrderByAggregateInput, {nullable:true})
    @Type(() => ProductSumOrderByAggregateInput)
    _sum?: ProductSumOrderByAggregateInput;
}
