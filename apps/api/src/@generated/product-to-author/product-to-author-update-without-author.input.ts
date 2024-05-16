import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateOneRequiredWithoutAuthorsNestedInput } from '../product/product-update-one-required-without-authors-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductToAuthorUpdateWithoutAuthorInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductUpdateOneRequiredWithoutAuthorsNestedInput, {nullable:true})
    @Type(() => ProductUpdateOneRequiredWithoutAuthorsNestedInput)
    product?: ProductUpdateOneRequiredWithoutAuthorsNestedInput;
}
