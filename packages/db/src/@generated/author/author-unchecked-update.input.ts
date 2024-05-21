import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToAuthorUncheckedUpdateManyWithoutAuthorNestedInput } from '../product-to-author/product-to-author-unchecked-update-many-without-author-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class AuthorUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductToAuthorUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    @Type(() => ProductToAuthorUncheckedUpdateManyWithoutAuthorNestedInput)
    products?: ProductToAuthorUncheckedUpdateManyWithoutAuthorNestedInput;
}