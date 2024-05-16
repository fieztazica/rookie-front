import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateOneRequiredWithoutProductsNestedInput } from '../category/category-update-one-required-without-products-nested.input';

@InputType()
export class ProductToCategoryUpdateWithoutProductInput {
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => CategoryUpdateOneRequiredWithoutProductsNestedInput, {
    nullable: true,
  })
  category?: CategoryUpdateOneRequiredWithoutProductsNestedInput;
}
