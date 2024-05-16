import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutProductsInput } from './author-create-without-products.input';
import { Type } from 'class-transformer';
import { AuthorCreateOrConnectWithoutProductsInput } from './author-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { AuthorWhereUniqueInput } from './author-where-unique.input';

@InputType()
export class AuthorCreateNestedOneWithoutProductsInput {
  @Field(() => AuthorCreateWithoutProductsInput, { nullable: true })
  @Type(() => AuthorCreateWithoutProductsInput)
  create?: AuthorCreateWithoutProductsInput;

  @Field(() => AuthorCreateOrConnectWithoutProductsInput, { nullable: true })
  @Type(() => AuthorCreateOrConnectWithoutProductsInput)
  connectOrCreate?: AuthorCreateOrConnectWithoutProductsInput;

  @Field(() => AuthorWhereUniqueInput, { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  connect?: Prisma.AtLeast<
    AuthorWhereUniqueInput,
    'id' | 'email' | 'phoneNumber'
  >;
}
