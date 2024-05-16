import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutProductToAuthorsInput } from './product-create-without-product-to-authors.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutProductToAuthorsInput } from './product-create-or-connect-without-product-to-authors.input';
import { ProductUpsertWithoutProductToAuthorsInput } from './product-upsert-without-product-to-authors.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutProductToAuthorsInput } from './product-update-to-one-with-where-without-product-to-authors.input';

@InputType()
export class ProductUpdateOneRequiredWithoutProductToAuthorsNestedInput {
  @Field(() => ProductCreateWithoutProductToAuthorsInput, { nullable: true })
  @Type(() => ProductCreateWithoutProductToAuthorsInput)
  create?: ProductCreateWithoutProductToAuthorsInput;

  @Field(() => ProductCreateOrConnectWithoutProductToAuthorsInput, {
    nullable: true,
  })
  @Type(() => ProductCreateOrConnectWithoutProductToAuthorsInput)
  connectOrCreate?: ProductCreateOrConnectWithoutProductToAuthorsInput;

  @Field(() => ProductUpsertWithoutProductToAuthorsInput, { nullable: true })
  @Type(() => ProductUpsertWithoutProductToAuthorsInput)
  upsert?: ProductUpsertWithoutProductToAuthorsInput;

  @Field(() => ProductWhereUniqueInput, { nullable: true })
  @Type(() => ProductWhereUniqueInput)
  connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;

  @Field(() => ProductUpdateToOneWithWhereWithoutProductToAuthorsInput, {
    nullable: true,
  })
  @Type(() => ProductUpdateToOneWithWhereWithoutProductToAuthorsInput)
  update?: ProductUpdateToOneWithWhereWithoutProductToAuthorsInput;
}
