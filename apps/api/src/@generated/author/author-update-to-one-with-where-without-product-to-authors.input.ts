import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorWhereInput } from './author-where.input';
import { Type } from 'class-transformer';
import { AuthorUpdateWithoutProductToAuthorsInput } from './author-update-without-product-to-authors.input';

@InputType()
export class AuthorUpdateToOneWithWhereWithoutProductToAuthorsInput {
  @Field(() => AuthorWhereInput, { nullable: true })
  @Type(() => AuthorWhereInput)
  where?: AuthorWhereInput;

  @Field(() => AuthorUpdateWithoutProductToAuthorsInput, { nullable: false })
  @Type(() => AuthorUpdateWithoutProductToAuthorsInput)
  data!: AuthorUpdateWithoutProductToAuthorsInput;
}
