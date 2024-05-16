import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToCategoryCreateManyCategoryInput } from './product-to-category-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductToCategoryCreateManyCategoryInputEnvelope {
  @Field(() => [ProductToCategoryCreateManyCategoryInput], { nullable: false })
  @Type(() => ProductToCategoryCreateManyCategoryInput)
  data!: Array<ProductToCategoryCreateManyCategoryInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
