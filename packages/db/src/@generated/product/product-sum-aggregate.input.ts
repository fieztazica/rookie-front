import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProductSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    price?: true;

    @Field(() => Boolean, {nullable:true})
    salePrice?: true;

    @Field(() => Boolean, {nullable:true})
    ratings?: true;

    @Field(() => Boolean, {nullable:true})
    storeQuantity?: true;
}
