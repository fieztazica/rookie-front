import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToAuthorUpdateManyWithoutAuthorNestedInput } from '../product-to-author/product-to-author-update-many-without-author-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class AuthorUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductToAuthorUpdateManyWithoutAuthorNestedInput, {nullable:true})
    @Type(() => ProductToAuthorUpdateManyWithoutAuthorNestedInput)
    productToAuthors?: ProductToAuthorUpdateManyWithoutAuthorNestedInput;
}
