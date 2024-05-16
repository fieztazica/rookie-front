import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToCategoryCreateNestedManyWithoutCategoryInput } from '../product-to-category/product-to-category-create-nested-many-without-category.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

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

  @Field(() => ProductToCategoryCreateNestedManyWithoutCategoryInput, {
    nullable: true,
  })
  @Type(() => ProductToCategoryCreateNestedManyWithoutCategoryInput)
  products?: ProductToCategoryCreateNestedManyWithoutCategoryInput;
}
