import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToCategoryCreateManyProductInput } from './product-to-category-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductToCategoryCreateManyProductInputEnvelope {
  @Field(() => [ProductToCategoryCreateManyProductInput], { nullable: false })
  @Type(() => ProductToCategoryCreateManyProductInput)
  data!: Array<ProductToCategoryCreateManyProductInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
