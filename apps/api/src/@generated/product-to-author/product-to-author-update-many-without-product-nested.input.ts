import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToAuthorCreateWithoutProductInput } from './product-to-author-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductToAuthorCreateOrConnectWithoutProductInput } from './product-to-author-create-or-connect-without-product.input';
import { ProductToAuthorUpsertWithWhereUniqueWithoutProductInput } from './product-to-author-upsert-with-where-unique-without-product.input';
import { ProductToAuthorCreateManyProductInputEnvelope } from './product-to-author-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductToAuthorWhereUniqueInput } from './product-to-author-where-unique.input';
import { ProductToAuthorUpdateWithWhereUniqueWithoutProductInput } from './product-to-author-update-with-where-unique-without-product.input';
import { ProductToAuthorUpdateManyWithWhereWithoutProductInput } from './product-to-author-update-many-with-where-without-product.input';
import { ProductToAuthorScalarWhereInput } from './product-to-author-scalar-where.input';

@InputType()
export class ProductToAuthorUpdateManyWithoutProductNestedInput {
  @Field(() => [ProductToAuthorCreateWithoutProductInput], { nullable: true })
  @Type(() => ProductToAuthorCreateWithoutProductInput)
  create?: Array<ProductToAuthorCreateWithoutProductInput>;

  @Field(() => [ProductToAuthorCreateOrConnectWithoutProductInput], {
    nullable: true,
  })
  @Type(() => ProductToAuthorCreateOrConnectWithoutProductInput)
  connectOrCreate?: Array<ProductToAuthorCreateOrConnectWithoutProductInput>;

  @Field(() => [ProductToAuthorUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true,
  })
  @Type(() => ProductToAuthorUpsertWithWhereUniqueWithoutProductInput)
  upsert?: Array<ProductToAuthorUpsertWithWhereUniqueWithoutProductInput>;

  @Field(() => ProductToAuthorCreateManyProductInputEnvelope, {
    nullable: true,
  })
  @Type(() => ProductToAuthorCreateManyProductInputEnvelope)
  createMany?: ProductToAuthorCreateManyProductInputEnvelope;

  @Field(() => [ProductToAuthorWhereUniqueInput], { nullable: true })
  @Type(() => ProductToAuthorWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<ProductToAuthorWhereUniqueInput, 'productId_authorId'>
  >;

  @Field(() => [ProductToAuthorWhereUniqueInput], { nullable: true })
  @Type(() => ProductToAuthorWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<ProductToAuthorWhereUniqueInput, 'productId_authorId'>
  >;

  @Field(() => [ProductToAuthorWhereUniqueInput], { nullable: true })
  @Type(() => ProductToAuthorWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<ProductToAuthorWhereUniqueInput, 'productId_authorId'>
  >;

  @Field(() => [ProductToAuthorWhereUniqueInput], { nullable: true })
  @Type(() => ProductToAuthorWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<ProductToAuthorWhereUniqueInput, 'productId_authorId'>
  >;

  @Field(() => [ProductToAuthorUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true,
  })
  @Type(() => ProductToAuthorUpdateWithWhereUniqueWithoutProductInput)
  update?: Array<ProductToAuthorUpdateWithWhereUniqueWithoutProductInput>;

  @Field(() => [ProductToAuthorUpdateManyWithWhereWithoutProductInput], {
    nullable: true,
  })
  @Type(() => ProductToAuthorUpdateManyWithWhereWithoutProductInput)
  updateMany?: Array<ProductToAuthorUpdateManyWithWhereWithoutProductInput>;

  @Field(() => [ProductToAuthorScalarWhereInput], { nullable: true })
  @Type(() => ProductToAuthorScalarWhereInput)
  deleteMany?: Array<ProductToAuthorScalarWhereInput>;
}
