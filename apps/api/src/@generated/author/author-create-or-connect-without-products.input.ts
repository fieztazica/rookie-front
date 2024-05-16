import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { Type } from 'class-transformer';
import { AuthorCreateWithoutProductsInput } from './author-create-without-products.input';

@InputType()
export class AuthorCreateOrConnectWithoutProductsInput {

    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    @Type(() => AuthorWhereUniqueInput)
    where!: Prisma.AtLeast<AuthorWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;

    @Field(() => AuthorCreateWithoutProductsInput, {nullable:false})
    @Type(() => AuthorCreateWithoutProductsInput)
    create!: AuthorCreateWithoutProductsInput;
}
