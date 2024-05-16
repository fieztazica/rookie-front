import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutProductsInput } from './author-create-without-products.input';
import { Type } from 'class-transformer';
import { AuthorCreateOrConnectWithoutProductsInput } from './author-create-or-connect-without-products.input';
import { AuthorUpsertWithoutProductsInput } from './author-upsert-without-products.input';
import { Prisma } from '@prisma/client';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { AuthorUpdateToOneWithWhereWithoutProductsInput } from './author-update-to-one-with-where-without-products.input';

@InputType()
export class AuthorUpdateOneRequiredWithoutProductsNestedInput {

    @Field(() => AuthorCreateWithoutProductsInput, {nullable:true})
    @Type(() => AuthorCreateWithoutProductsInput)
    create?: AuthorCreateWithoutProductsInput;

    @Field(() => AuthorCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => AuthorCreateOrConnectWithoutProductsInput)
    connectOrCreate?: AuthorCreateOrConnectWithoutProductsInput;

    @Field(() => AuthorUpsertWithoutProductsInput, {nullable:true})
    @Type(() => AuthorUpsertWithoutProductsInput)
    upsert?: AuthorUpsertWithoutProductsInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    @Type(() => AuthorWhereUniqueInput)
    connect?: Prisma.AtLeast<AuthorWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;

    @Field(() => AuthorUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => AuthorUpdateToOneWithWhereWithoutProductsInput)
    update?: AuthorUpdateToOneWithWhereWithoutProductsInput;
}
