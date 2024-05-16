import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { Type } from 'class-transformer';
import { AuthorCreateWithoutProductToAuthorsInput } from './author-create-without-product-to-authors.input';

@InputType()
export class AuthorCreateOrConnectWithoutProductToAuthorsInput {

    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    @Type(() => AuthorWhereUniqueInput)
    where!: Prisma.AtLeast<AuthorWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;

    @Field(() => AuthorCreateWithoutProductToAuthorsInput, {nullable:false})
    @Type(() => AuthorCreateWithoutProductToAuthorsInput)
    create!: AuthorCreateWithoutProductToAuthorsInput;
}
