import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutImagesInput } from './product-update-without-images.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutImagesInput {
  @Field(() => ProductWhereInput, { nullable: true })
  @Type(() => ProductWhereInput)
  where?: ProductWhereInput;

  @Field(() => ProductUpdateWithoutImagesInput, { nullable: false })
  @Type(() => ProductUpdateWithoutImagesInput)
  data!: ProductUpdateWithoutImagesInput;
}
