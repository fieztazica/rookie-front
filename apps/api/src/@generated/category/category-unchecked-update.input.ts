import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToCategoryUncheckedUpdateManyWithoutCategoryNestedInput } from '../product-to-category/product-to-category-unchecked-update-many-without-category-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  displayName?: string;

  @Field(() => Boolean, { nullable: true })
  deleted?: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => ProductToCategoryUncheckedUpdateManyWithoutCategoryNestedInput, {
    nullable: true,
  })
  @Type(() => ProductToCategoryUncheckedUpdateManyWithoutCategoryNestedInput)
  products?: ProductToCategoryUncheckedUpdateManyWithoutCategoryNestedInput;
}
