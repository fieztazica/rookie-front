import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUpdateOneRequiredWithoutProductToAuthorsNestedInput } from '../author/author-update-one-required-without-product-to-authors-nested.input';

@InputType()
export class ProductToAuthorUpdateWithoutProductInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AuthorUpdateOneRequiredWithoutProductToAuthorsNestedInput, {nullable:true})
    author?: AuthorUpdateOneRequiredWithoutProductToAuthorsNestedInput;
}
