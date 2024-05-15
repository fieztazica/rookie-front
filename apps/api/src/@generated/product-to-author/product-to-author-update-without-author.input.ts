import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateOneRequiredWithoutProductToAuthorsNestedInput } from '../product/product-update-one-required-without-product-to-authors-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductToAuthorUpdateWithoutAuthorInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductUpdateOneRequiredWithoutProductToAuthorsNestedInput, {nullable:true})
    @Type(() => ProductUpdateOneRequiredWithoutProductToAuthorsNestedInput)
    product?: ProductUpdateOneRequiredWithoutProductToAuthorsNestedInput;
}
