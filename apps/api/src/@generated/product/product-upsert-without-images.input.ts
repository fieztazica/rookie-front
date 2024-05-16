import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutImagesInput } from './product-update-without-images.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutImagesInput } from './product-create-without-images.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutImagesInput {
  @Field(() => ProductUpdateWithoutImagesInput, { nullable: false })
  @Type(() => ProductUpdateWithoutImagesInput)
  update!: ProductUpdateWithoutImagesInput;

  @Field(() => ProductCreateWithoutImagesInput, { nullable: false })
  @Type(() => ProductCreateWithoutImagesInput)
  create!: ProductCreateWithoutImagesInput;

  @Field(() => ProductWhereInput, { nullable: true })
  @Type(() => ProductWhereInput)
  where?: ProductWhereInput;
}
