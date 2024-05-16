import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateNestedOneWithoutProductsInput } from '../author/author-create-nested-one-without-products.input';

@InputType()
export class ProductToAuthorCreateWithoutProductInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AuthorCreateNestedOneWithoutProductsInput, {nullable:false})
    author!: AuthorCreateNestedOneWithoutProductsInput;
}
