import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToAuthorCreateWithoutProductInput } from './product-to-author-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductToAuthorCreateOrConnectWithoutProductInput } from './product-to-author-create-or-connect-without-product.input';
import { ProductToAuthorCreateManyProductInputEnvelope } from './product-to-author-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductToAuthorWhereUniqueInput } from './product-to-author-where-unique.input';

@InputType()
export class ProductToAuthorCreateNestedManyWithoutProductInput {
  @Field(() => [ProductToAuthorCreateWithoutProductInput], { nullable: true })
  @Type(() => ProductToAuthorCreateWithoutProductInput)
  create?: Array<ProductToAuthorCreateWithoutProductInput>;

  @Field(() => [ProductToAuthorCreateOrConnectWithoutProductInput], {
    nullable: true,
  })
  @Type(() => ProductToAuthorCreateOrConnectWithoutProductInput)
  connectOrCreate?: Array<ProductToAuthorCreateOrConnectWithoutProductInput>;

  @Field(() => ProductToAuthorCreateManyProductInputEnvelope, {
    nullable: true,
  })
  @Type(() => ProductToAuthorCreateManyProductInputEnvelope)
  createMany?: ProductToAuthorCreateManyProductInputEnvelope;

  @Field(() => [ProductToAuthorWhereUniqueInput], { nullable: true })
  @Type(() => ProductToAuthorWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<ProductToAuthorWhereUniqueInput, 'productId_authorId'>
  >;
}
