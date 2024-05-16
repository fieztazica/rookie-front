import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageCreateWithoutProductInput } from './image-create-without-product.input';

@InputType()
export class ImageCreateOrConnectWithoutProductInput {
  @Field(() => ImageWhereUniqueInput, { nullable: false })
  @Type(() => ImageWhereUniqueInput)
  where!: Prisma.AtLeast<ImageWhereUniqueInput, 'id_productId'>;

  @Field(() => ImageCreateWithoutProductInput, { nullable: false })
  @Type(() => ImageCreateWithoutProductInput)
  create!: ImageCreateWithoutProductInput;
}
