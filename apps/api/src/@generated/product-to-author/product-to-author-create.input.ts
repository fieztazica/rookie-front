import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutProductToAuthorsInput } from '../product/product-create-nested-one-without-product-to-authors.input';
import { Type } from 'class-transformer';
import { AuthorCreateNestedOneWithoutProductToAuthorsInput } from '../author/author-create-nested-one-without-product-to-authors.input';

@InputType()
export class ProductToAuthorCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedOneWithoutProductToAuthorsInput, {nullable:false})
    @Type(() => ProductCreateNestedOneWithoutProductToAuthorsInput)
    product!: ProductCreateNestedOneWithoutProductToAuthorsInput;

    @Field(() => AuthorCreateNestedOneWithoutProductToAuthorsInput, {nullable:false})
    author!: AuthorCreateNestedOneWithoutProductToAuthorsInput;
}
