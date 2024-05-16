import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutCategoriesInput } from './product-create-without-categories.input';

@InputType()
export class ProductCreateOrConnectWithoutCategoriesInput {
  @Field(() => ProductWhereUniqueInput, { nullable: false })
  @Type(() => ProductWhereUniqueInput)
  where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;

  @Field(() => ProductCreateWithoutCategoriesInput, { nullable: false })
  @Type(() => ProductCreateWithoutCategoriesInput)
  create!: ProductCreateWithoutCategoriesInput;
}
