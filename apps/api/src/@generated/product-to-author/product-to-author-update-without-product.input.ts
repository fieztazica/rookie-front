import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUpdateOneRequiredWithoutProductsNestedInput } from '../author/author-update-one-required-without-products-nested.input';

@InputType()
export class ProductToAuthorUpdateWithoutProductInput {
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => AuthorUpdateOneRequiredWithoutProductsNestedInput, {
    nullable: true,
  })
  author?: AuthorUpdateOneRequiredWithoutProductsNestedInput;
}
