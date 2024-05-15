import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateOneRequiredWithoutProductToAuthorsNestedInput } from '../product/product-update-one-required-without-product-to-authors-nested.input';
import { Type } from 'class-transformer';
import { AuthorUpdateOneRequiredWithoutProductToAuthorsNestedInput } from '../author/author-update-one-required-without-product-to-authors-nested.input';

@InputType()
export class ProductToAuthorUpdateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductUpdateOneRequiredWithoutProductToAuthorsNestedInput, {nullable:true})
    @Type(() => ProductUpdateOneRequiredWithoutProductToAuthorsNestedInput)
    product?: ProductUpdateOneRequiredWithoutProductToAuthorsNestedInput;

    @Field(() => AuthorUpdateOneRequiredWithoutProductToAuthorsNestedInput, {nullable:true})
    author?: AuthorUpdateOneRequiredWithoutProductToAuthorsNestedInput;
}
