import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductUpdateOneRequiredWithoutImagesNestedInput } from '../product/product-update-one-required-without-images-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class ImageUpdateInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  url?: string;

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

  @Field(() => ProductUpdateOneRequiredWithoutImagesNestedInput, {
    nullable: true,
  })
  @Type(() => ProductUpdateOneRequiredWithoutImagesNestedInput)
  product?: ProductUpdateOneRequiredWithoutImagesNestedInput;
}
