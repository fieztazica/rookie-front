import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToCategoryCreateWithoutCategoryInput } from './product-to-category-create-without-category.input';
import { Type } from 'class-transformer';
import { ProductToCategoryCreateOrConnectWithoutCategoryInput } from './product-to-category-create-or-connect-without-category.input';
import { ProductToCategoryUpsertWithWhereUniqueWithoutCategoryInput } from './product-to-category-upsert-with-where-unique-without-category.input';
import { ProductToCategoryCreateManyCategoryInputEnvelope } from './product-to-category-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductToCategoryWhereUniqueInput } from './product-to-category-where-unique.input';
import { ProductToCategoryUpdateWithWhereUniqueWithoutCategoryInput } from './product-to-category-update-with-where-unique-without-category.input';
import { ProductToCategoryUpdateManyWithWhereWithoutCategoryInput } from './product-to-category-update-many-with-where-without-category.input';
import { ProductToCategoryScalarWhereInput } from './product-to-category-scalar-where.input';

@InputType()
export class ProductToCategoryUpdateManyWithoutCategoryNestedInput {
  @Field(() => [ProductToCategoryCreateWithoutCategoryInput], {
    nullable: true,
  })
  @Type(() => ProductToCategoryCreateWithoutCategoryInput)
  create?: Array<ProductToCategoryCreateWithoutCategoryInput>;

  @Field(() => [ProductToCategoryCreateOrConnectWithoutCategoryInput], {
    nullable: true,
  })
  @Type(() => ProductToCategoryCreateOrConnectWithoutCategoryInput)
  connectOrCreate?: Array<ProductToCategoryCreateOrConnectWithoutCategoryInput>;

  @Field(() => [ProductToCategoryUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true,
  })
  @Type(() => ProductToCategoryUpsertWithWhereUniqueWithoutCategoryInput)
  upsert?: Array<ProductToCategoryUpsertWithWhereUniqueWithoutCategoryInput>;

  @Field(() => ProductToCategoryCreateManyCategoryInputEnvelope, {
    nullable: true,
  })
  @Type(() => ProductToCategoryCreateManyCategoryInputEnvelope)
  createMany?: ProductToCategoryCreateManyCategoryInputEnvelope;

  @Field(() => [ProductToCategoryWhereUniqueInput], { nullable: true })
  @Type(() => ProductToCategoryWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<ProductToCategoryWhereUniqueInput, 'productId_categoryId'>
  >;

  @Field(() => [ProductToCategoryWhereUniqueInput], { nullable: true })
  @Type(() => ProductToCategoryWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<ProductToCategoryWhereUniqueInput, 'productId_categoryId'>
  >;

  @Field(() => [ProductToCategoryWhereUniqueInput], { nullable: true })
  @Type(() => ProductToCategoryWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<ProductToCategoryWhereUniqueInput, 'productId_categoryId'>
  >;

  @Field(() => [ProductToCategoryWhereUniqueInput], { nullable: true })
  @Type(() => ProductToCategoryWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<ProductToCategoryWhereUniqueInput, 'productId_categoryId'>
  >;

  @Field(() => [ProductToCategoryUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true,
  })
  @Type(() => ProductToCategoryUpdateWithWhereUniqueWithoutCategoryInput)
  update?: Array<ProductToCategoryUpdateWithWhereUniqueWithoutCategoryInput>;

  @Field(() => [ProductToCategoryUpdateManyWithWhereWithoutCategoryInput], {
    nullable: true,
  })
  @Type(() => ProductToCategoryUpdateManyWithWhereWithoutCategoryInput)
  updateMany?: Array<ProductToCategoryUpdateManyWithWhereWithoutCategoryInput>;

  @Field(() => [ProductToCategoryScalarWhereInput], { nullable: true })
  @Type(() => ProductToCategoryScalarWhereInput)
  deleteMany?: Array<ProductToCategoryScalarWhereInput>;
}
