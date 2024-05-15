import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUpdateWithoutProductToAuthorsInput } from './author-update-without-product-to-authors.input';
import { Type } from 'class-transformer';
import { AuthorCreateWithoutProductToAuthorsInput } from './author-create-without-product-to-authors.input';
import { AuthorWhereInput } from './author-where.input';

@InputType()
export class AuthorUpsertWithoutProductToAuthorsInput {

    @Field(() => AuthorUpdateWithoutProductToAuthorsInput, {nullable:false})
    @Type(() => AuthorUpdateWithoutProductToAuthorsInput)
    update!: AuthorUpdateWithoutProductToAuthorsInput;

    @Field(() => AuthorCreateWithoutProductToAuthorsInput, {nullable:false})
    @Type(() => AuthorCreateWithoutProductToAuthorsInput)
    create!: AuthorCreateWithoutProductToAuthorsInput;

    @Field(() => AuthorWhereInput, {nullable:true})
    @Type(() => AuthorWhereInput)
    where?: AuthorWhereInput;
}
