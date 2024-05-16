import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateOneRequiredWithoutAuthorsNestedInput } from '../product/product-update-one-required-without-authors-nested.input';
import { Type } from 'class-transformer';
import { AuthorUpdateOneRequiredWithoutProductsNestedInput } from '../author/author-update-one-required-without-products-nested.input';

@InputType()
export class ProductToAuthorUpdateInput {
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => ProductUpdateOneRequiredWithoutAuthorsNestedInput, {
    nullable: true,
  })
  @Type(() => ProductUpdateOneRequiredWithoutAuthorsNestedInput)
  product?: ProductUpdateOneRequiredWithoutAuthorsNestedInput;

  @Field(() => AuthorUpdateOneRequiredWithoutProductsNestedInput, {
    nullable: true,
  })
  author?: AuthorUpdateOneRequiredWithoutProductsNestedInput;
}
