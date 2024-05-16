import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutCategoriesInput } from './product-create-without-categories.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutCategoriesInput } from './product-create-or-connect-without-categories.input';
import { ProductUpsertWithoutCategoriesInput } from './product-upsert-without-categories.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutCategoriesInput } from './product-update-to-one-with-where-without-categories.input';

@InputType()
export class ProductUpdateOneRequiredWithoutCategoriesNestedInput {
  @Field(() => ProductCreateWithoutCategoriesInput, { nullable: true })
  @Type(() => ProductCreateWithoutCategoriesInput)
  create?: ProductCreateWithoutCategoriesInput;

  @Field(() => ProductCreateOrConnectWithoutCategoriesInput, { nullable: true })
  @Type(() => ProductCreateOrConnectWithoutCategoriesInput)
  connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput;

  @Field(() => ProductUpsertWithoutCategoriesInput, { nullable: true })
  @Type(() => ProductUpsertWithoutCategoriesInput)
  upsert?: ProductUpsertWithoutCategoriesInput;

  @Field(() => ProductWhereUniqueInput, { nullable: true })
  @Type(() => ProductWhereUniqueInput)
  connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;

  @Field(() => ProductUpdateToOneWithWhereWithoutCategoriesInput, {
    nullable: true,
  })
  @Type(() => ProductUpdateToOneWithWhereWithoutCategoriesInput)
  update?: ProductUpdateToOneWithWhereWithoutCategoriesInput;
}
