import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageUpdateWithoutProductInput } from './image-update-without-product.input';
import { ImageCreateWithoutProductInput } from './image-create-without-product.input';

@InputType()
export class ImageUpsertWithWhereUniqueWithoutProductInput {
  @Field(() => ImageWhereUniqueInput, { nullable: false })
  @Type(() => ImageWhereUniqueInput)
  where!: Prisma.AtLeast<ImageWhereUniqueInput, 'id_productId'>;

  @Field(() => ImageUpdateWithoutProductInput, { nullable: false })
  @Type(() => ImageUpdateWithoutProductInput)
  update!: ImageUpdateWithoutProductInput;

  @Field(() => ImageCreateWithoutProductInput, { nullable: false })
  @Type(() => ImageCreateWithoutProductInput)
  create!: ImageCreateWithoutProductInput;
}
