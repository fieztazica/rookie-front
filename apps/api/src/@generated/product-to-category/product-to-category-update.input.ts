import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateOneRequiredWithoutProductsNestedInput } from '../category/category-update-one-required-without-products-nested.input';
import { ProductUpdateOneRequiredWithoutCategoriesNestedInput } from '../product/product-update-one-required-without-categories-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductToCategoryUpdateInput {
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => CategoryUpdateOneRequiredWithoutProductsNestedInput, {
    nullable: true,
  })
  category?: CategoryUpdateOneRequiredWithoutProductsNestedInput;

  @Field(() => ProductUpdateOneRequiredWithoutCategoriesNestedInput, {
    nullable: true,
  })
  @Type(() => ProductUpdateOneRequiredWithoutCategoriesNestedInput)
  product?: ProductUpdateOneRequiredWithoutCategoriesNestedInput;
}
