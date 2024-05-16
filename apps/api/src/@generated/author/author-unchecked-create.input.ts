import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToAuthorUncheckedCreateNestedManyWithoutAuthorInput } from '../product-to-author/product-to-author-unchecked-create-nested-many-without-author.input';
import { Type } from 'class-transformer';

@InputType()
export class AuthorUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductToAuthorUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    @Type(() => ProductToAuthorUncheckedCreateNestedManyWithoutAuthorInput)
    products?: ProductToAuthorUncheckedCreateNestedManyWithoutAuthorInput;
}
