import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateNestedOneWithoutProductToAuthorsInput } from '../author/author-create-nested-one-without-product-to-authors.input';

@InputType()
export class ProductToAuthorCreateWithoutProductInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AuthorCreateNestedOneWithoutProductToAuthorsInput, {nullable:false})
    author!: AuthorCreateNestedOneWithoutProductToAuthorsInput;
}
