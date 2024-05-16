import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutProductToAuthorsInput } from './author-create-without-product-to-authors.input';
import { Type } from 'class-transformer';
import { AuthorCreateOrConnectWithoutProductToAuthorsInput } from './author-create-or-connect-without-product-to-authors.input';
import { AuthorUpsertWithoutProductToAuthorsInput } from './author-upsert-without-product-to-authors.input';
import { Prisma } from '@prisma/client';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { AuthorUpdateToOneWithWhereWithoutProductToAuthorsInput } from './author-update-to-one-with-where-without-product-to-authors.input';

@InputType()
export class AuthorUpdateOneRequiredWithoutProductToAuthorsNestedInput {
  @Field(() => AuthorCreateWithoutProductToAuthorsInput, { nullable: true })
  @Type(() => AuthorCreateWithoutProductToAuthorsInput)
  create?: AuthorCreateWithoutProductToAuthorsInput;

  @Field(() => AuthorCreateOrConnectWithoutProductToAuthorsInput, {
    nullable: true,
  })
  @Type(() => AuthorCreateOrConnectWithoutProductToAuthorsInput)
  connectOrCreate?: AuthorCreateOrConnectWithoutProductToAuthorsInput;

  @Field(() => AuthorUpsertWithoutProductToAuthorsInput, { nullable: true })
  @Type(() => AuthorUpsertWithoutProductToAuthorsInput)
  upsert?: AuthorUpsertWithoutProductToAuthorsInput;

  @Field(() => AuthorWhereUniqueInput, { nullable: true })
  @Type(() => AuthorWhereUniqueInput)
  connect?: Prisma.AtLeast<
    AuthorWhereUniqueInput,
    'id' | 'email' | 'phoneNumber'
  >;

  @Field(() => AuthorUpdateToOneWithWhereWithoutProductToAuthorsInput, {
    nullable: true,
  })
  @Type(() => AuthorUpdateToOneWithWhereWithoutProductToAuthorsInput)
  update?: AuthorUpdateToOneWithWhereWithoutProductToAuthorsInput;
}
