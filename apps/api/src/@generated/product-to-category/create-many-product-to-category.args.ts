import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToCategoryCreateManyInput } from './product-to-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProductToCategoryArgs {
  @Field(() => [ProductToCategoryCreateManyInput], { nullable: false })
  @Type(() => ProductToCategoryCreateManyInput)
  data!: Array<ProductToCategoryCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
