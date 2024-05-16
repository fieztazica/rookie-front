import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToPublisherCreateWithoutProductInput } from './product-to-publisher-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductToPublisherCreateOrConnectWithoutProductInput } from './product-to-publisher-create-or-connect-without-product.input';
import { ProductToPublisherUpsertWithWhereUniqueWithoutProductInput } from './product-to-publisher-upsert-with-where-unique-without-product.input';
import { ProductToPublisherCreateManyProductInputEnvelope } from './product-to-publisher-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductToPublisherWhereUniqueInput } from './product-to-publisher-where-unique.input';
import { ProductToPublisherUpdateWithWhereUniqueWithoutProductInput } from './product-to-publisher-update-with-where-unique-without-product.input';
import { ProductToPublisherUpdateManyWithWhereWithoutProductInput } from './product-to-publisher-update-many-with-where-without-product.input';
import { ProductToPublisherScalarWhereInput } from './product-to-publisher-scalar-where.input';

@InputType()
export class ProductToPublisherUpdateManyWithoutProductNestedInput {
  @Field(() => [ProductToPublisherCreateWithoutProductInput], {
    nullable: true,
  })
  @Type(() => ProductToPublisherCreateWithoutProductInput)
  create?: Array<ProductToPublisherCreateWithoutProductInput>;

  @Field(() => [ProductToPublisherCreateOrConnectWithoutProductInput], {
    nullable: true,
  })
  @Type(() => ProductToPublisherCreateOrConnectWithoutProductInput)
  connectOrCreate?: Array<ProductToPublisherCreateOrConnectWithoutProductInput>;

  @Field(() => [ProductToPublisherUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true,
  })
  @Type(() => ProductToPublisherUpsertWithWhereUniqueWithoutProductInput)
  upsert?: Array<ProductToPublisherUpsertWithWhereUniqueWithoutProductInput>;

  @Field(() => ProductToPublisherCreateManyProductInputEnvelope, {
    nullable: true,
  })
  @Type(() => ProductToPublisherCreateManyProductInputEnvelope)
  createMany?: ProductToPublisherCreateManyProductInputEnvelope;

  @Field(() => [ProductToPublisherWhereUniqueInput], { nullable: true })
  @Type(() => ProductToPublisherWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<ProductToPublisherWhereUniqueInput, 'productId_publisherId'>
  >;

  @Field(() => [ProductToPublisherWhereUniqueInput], { nullable: true })
  @Type(() => ProductToPublisherWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<ProductToPublisherWhereUniqueInput, 'productId_publisherId'>
  >;

  @Field(() => [ProductToPublisherWhereUniqueInput], { nullable: true })
  @Type(() => ProductToPublisherWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<ProductToPublisherWhereUniqueInput, 'productId_publisherId'>
  >;

  @Field(() => [ProductToPublisherWhereUniqueInput], { nullable: true })
  @Type(() => ProductToPublisherWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<ProductToPublisherWhereUniqueInput, 'productId_publisherId'>
  >;

  @Field(() => [ProductToPublisherUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true,
  })
  @Type(() => ProductToPublisherUpdateWithWhereUniqueWithoutProductInput)
  update?: Array<ProductToPublisherUpdateWithWhereUniqueWithoutProductInput>;

  @Field(() => [ProductToPublisherUpdateManyWithWhereWithoutProductInput], {
    nullable: true,
  })
  @Type(() => ProductToPublisherUpdateManyWithWhereWithoutProductInput)
  updateMany?: Array<ProductToPublisherUpdateManyWithWhereWithoutProductInput>;

  @Field(() => [ProductToPublisherScalarWhereInput], { nullable: true })
  @Type(() => ProductToPublisherScalarWhereInput)
  deleteMany?: Array<ProductToPublisherScalarWhereInput>;
}
