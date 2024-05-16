import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutAuthorsInput } from './product-create-without-authors.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutAuthorsInput } from './product-create-or-connect-without-authors.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutAuthorsInput {
  @Field(() => ProductCreateWithoutAuthorsInput, { nullable: true })
  @Type(() => ProductCreateWithoutAuthorsInput)
  create?: ProductCreateWithoutAuthorsInput;

  @Field(() => ProductCreateOrConnectWithoutAuthorsInput, { nullable: true })
  @Type(() => ProductCreateOrConnectWithoutAuthorsInput)
  connectOrCreate?: ProductCreateOrConnectWithoutAuthorsInput;

  @Field(() => ProductWhereUniqueInput, { nullable: true })
  @Type(() => ProductWhereUniqueInput)
  connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
}
