import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductToCategoryWhereUniqueInput } from './product-to-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProductToCategoryCreateWithoutCategoryInput } from './product-to-category-create-without-category.input';

@InputType()
export class ProductToCategoryCreateOrConnectWithoutCategoryInput {
  @Field(() => ProductToCategoryWhereUniqueInput, { nullable: false })
  @Type(() => ProductToCategoryWhereUniqueInput)
  where!: Prisma.AtLeast<
    ProductToCategoryWhereUniqueInput,
    'productId_categoryId'
  >;

  @Field(() => ProductToCategoryCreateWithoutCategoryInput, { nullable: false })
  @Type(() => ProductToCategoryCreateWithoutCategoryInput)
  create!: ProductToCategoryCreateWithoutCategoryInput;
}
