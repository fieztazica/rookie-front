import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUpdateWithoutProductsInput } from './author-update-without-products.input';
import { Type } from 'class-transformer';
import { AuthorCreateWithoutProductsInput } from './author-create-without-products.input';
import { AuthorWhereInput } from './author-where.input';

@InputType()
export class AuthorUpsertWithoutProductsInput {

    @Field(() => AuthorUpdateWithoutProductsInput, {nullable:false})
    @Type(() => AuthorUpdateWithoutProductsInput)
    update!: AuthorUpdateWithoutProductsInput;

    @Field(() => AuthorCreateWithoutProductsInput, {nullable:false})
    @Type(() => AuthorCreateWithoutProductsInput)
    create!: AuthorCreateWithoutProductsInput;

    @Field(() => AuthorWhereInput, {nullable:true})
    @Type(() => AuthorWhereInput)
    where?: AuthorWhereInput;
}
