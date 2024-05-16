import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutProductToAuthorsInput } from './author-create-without-product-to-authors.input';
import { Type } from 'class-transformer';
import { AuthorCreateOrConnectWithoutProductToAuthorsInput } from './author-create-or-connect-without-product-to-authors.input';
import { Prisma } from '@prisma/client';
import { AuthorWhereUniqueInput } from './author-where-unique.input';

@InputType()
export class AuthorCreateNestedOneWithoutProductToAuthorsInput {

    @Field(() => AuthorCreateWithoutProductToAuthorsInput, {nullable:true})
    @Type(() => AuthorCreateWithoutProductToAuthorsInput)
    create?: AuthorCreateWithoutProductToAuthorsInput;

    @Field(() => AuthorCreateOrConnectWithoutProductToAuthorsInput, {nullable:true})
    @Type(() => AuthorCreateOrConnectWithoutProductToAuthorsInput)
    connectOrCreate?: AuthorCreateOrConnectWithoutProductToAuthorsInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    @Type(() => AuthorWhereUniqueInput)
    connect?: Prisma.AtLeast<AuthorWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;
}
