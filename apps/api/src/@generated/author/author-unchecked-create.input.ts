import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToAuthorUncheckedCreateNestedManyWithoutAuthorInput } from '../product-to-author/product-to-author-unchecked-create-nested-many-without-author.input';
import { Type } from 'class-transformer';

@InputType()
export class AuthorUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductToAuthorUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    @Type(() => ProductToAuthorUncheckedCreateNestedManyWithoutAuthorInput)
    productToAuthors?: ProductToAuthorUncheckedCreateNestedManyWithoutAuthorInput;
}
