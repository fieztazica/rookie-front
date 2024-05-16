import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductRelationFilter {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    is?: ProductWhereInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    isNot?: ProductWhereInput;
}
