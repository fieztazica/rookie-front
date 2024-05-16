import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutAuthorsInput } from './product-create-without-authors.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutAuthorsInput } from './product-create-or-connect-without-authors.input';
import { ProductUpsertWithoutAuthorsInput } from './product-upsert-without-authors.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutAuthorsInput } from './product-update-to-one-with-where-without-authors.input';

@InputType()
export class ProductUpdateOneRequiredWithoutAuthorsNestedInput {
  @Field(() => ProductCreateWithoutAuthorsInput, { nullable: true })
  @Type(() => ProductCreateWithoutAuthorsInput)
  create?: ProductCreateWithoutAuthorsInput;

  @Field(() => ProductCreateOrConnectWithoutAuthorsInput, { nullable: true })
  @Type(() => ProductCreateOrConnectWithoutAuthorsInput)
  connectOrCreate?: ProductCreateOrConnectWithoutAuthorsInput;

  @Field(() => ProductUpsertWithoutAuthorsInput, { nullable: true })
  @Type(() => ProductUpsertWithoutAuthorsInput)
  upsert?: ProductUpsertWithoutAuthorsInput;

  @Field(() => ProductWhereUniqueInput, { nullable: true })
  @Type(() => ProductWhereUniqueInput)
  connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;

  @Field(() => ProductUpdateToOneWithWhereWithoutAuthorsInput, {
    nullable: true,
  })
  @Type(() => ProductUpdateToOneWithWhereWithoutAuthorsInput)
  update?: ProductUpdateToOneWithWhereWithoutAuthorsInput;
}
