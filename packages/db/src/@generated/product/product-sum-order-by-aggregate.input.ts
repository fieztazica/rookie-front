import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ProductSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    salePrice?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    storeQuantity?: keyof typeof SortOrder;
}