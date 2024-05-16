import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductToCategoryWhereUniqueInput } from './product-to-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProductToCategoryUpdateWithoutProductInput } from './product-to-category-update-without-product.input';

@InputType()
export class ProductToCategoryUpdateWithWhereUniqueWithoutProductInput {
  @Field(() => ProductToCategoryWhereUniqueInput, { nullable: false })
  @Type(() => ProductToCategoryWhereUniqueInput)
  where!: Prisma.AtLeast<
    ProductToCategoryWhereUniqueInput,
    'productId_categoryId'
  >;

  @Field(() => ProductToCategoryUpdateWithoutProductInput, { nullable: false })
  @Type(() => ProductToCategoryUpdateWithoutProductInput)
  data!: ProductToCategoryUpdateWithoutProductInput;
}
