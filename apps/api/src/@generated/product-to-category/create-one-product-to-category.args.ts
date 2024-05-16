import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToCategoryCreateInput } from './product-to-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProductToCategoryArgs {
  @Field(() => ProductToCategoryCreateInput, { nullable: false })
  @Type(() => ProductToCategoryCreateInput)
  data!: ProductToCategoryCreateInput;
}
