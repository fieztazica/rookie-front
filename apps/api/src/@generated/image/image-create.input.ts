import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutImagesInput } from '../product/product-create-nested-one-without-images.input';
import { Type } from 'class-transformer';

@InputType()
export class ImageCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  url!: string;

  @Field(() => String, { nullable: true })
  alt?: string;

  @Field(() => Boolean, { nullable: true })
  isThumbnail?: boolean;

  @Field(() => Boolean, { nullable: true })
  deleted?: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => ProductCreateNestedOneWithoutImagesInput, { nullable: false })
  @Type(() => ProductCreateNestedOneWithoutImagesInput)
  product!: ProductCreateNestedOneWithoutImagesInput;
}
