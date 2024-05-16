import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutProductInput } from './image-create-without-product.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutProductInput } from './image-create-or-connect-without-product.input';
import { ImageUpsertWithWhereUniqueWithoutProductInput } from './image-upsert-with-where-unique-without-product.input';
import { ImageCreateManyProductInputEnvelope } from './image-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageUpdateWithWhereUniqueWithoutProductInput } from './image-update-with-where-unique-without-product.input';
import { ImageUpdateManyWithWhereWithoutProductInput } from './image-update-many-with-where-without-product.input';
import { ImageScalarWhereInput } from './image-scalar-where.input';

@InputType()
export class ImageUpdateManyWithoutProductNestedInput {
  @Field(() => [ImageCreateWithoutProductInput], { nullable: true })
  @Type(() => ImageCreateWithoutProductInput)
  create?: Array<ImageCreateWithoutProductInput>;

  @Field(() => [ImageCreateOrConnectWithoutProductInput], { nullable: true })
  @Type(() => ImageCreateOrConnectWithoutProductInput)
  connectOrCreate?: Array<ImageCreateOrConnectWithoutProductInput>;

  @Field(() => [ImageUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true,
  })
  @Type(() => ImageUpsertWithWhereUniqueWithoutProductInput)
  upsert?: Array<ImageUpsertWithWhereUniqueWithoutProductInput>;

  @Field(() => ImageCreateManyProductInputEnvelope, { nullable: true })
  @Type(() => ImageCreateManyProductInputEnvelope)
  createMany?: ImageCreateManyProductInputEnvelope;

  @Field(() => [ImageWhereUniqueInput], { nullable: true })
  @Type(() => ImageWhereUniqueInput)
  set?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id_productId'>>;

  @Field(() => [ImageWhereUniqueInput], { nullable: true })
  @Type(() => ImageWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id_productId'>>;

  @Field(() => [ImageWhereUniqueInput], { nullable: true })
  @Type(() => ImageWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id_productId'>>;

  @Field(() => [ImageWhereUniqueInput], { nullable: true })
  @Type(() => ImageWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id_productId'>>;

  @Field(() => [ImageUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true,
  })
  @Type(() => ImageUpdateWithWhereUniqueWithoutProductInput)
  update?: Array<ImageUpdateWithWhereUniqueWithoutProductInput>;

  @Field(() => [ImageUpdateManyWithWhereWithoutProductInput], {
    nullable: true,
  })
  @Type(() => ImageUpdateManyWithWhereWithoutProductInput)
  updateMany?: Array<ImageUpdateManyWithWhereWithoutProductInput>;

  @Field(() => [ImageScalarWhereInput], { nullable: true })
  @Type(() => ImageScalarWhereInput)
  deleteMany?: Array<ImageScalarWhereInput>;
}
