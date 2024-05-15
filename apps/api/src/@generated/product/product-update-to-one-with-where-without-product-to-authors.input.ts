import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutProductToAuthorsInput } from './product-update-without-product-to-authors.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutProductToAuthorsInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutProductToAuthorsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutProductToAuthorsInput)
    data!: ProductUpdateWithoutProductToAuthorsInput;
}
