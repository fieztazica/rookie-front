import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutCategoriesInput } from './product-update-without-categories.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutCategoriesInput {
  @Field(() => ProductWhereInput, { nullable: true })
  @Type(() => ProductWhereInput)
  where?: ProductWhereInput;

  @Field(() => ProductUpdateWithoutCategoriesInput, { nullable: false })
  @Type(() => ProductUpdateWithoutCategoriesInput)
  data!: ProductUpdateWithoutCategoriesInput;
}
