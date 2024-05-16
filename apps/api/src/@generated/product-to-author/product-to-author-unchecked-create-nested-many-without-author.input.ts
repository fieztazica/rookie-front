import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToAuthorCreateWithoutAuthorInput } from './product-to-author-create-without-author.input';
import { Type } from 'class-transformer';
import { ProductToAuthorCreateOrConnectWithoutAuthorInput } from './product-to-author-create-or-connect-without-author.input';
import { ProductToAuthorCreateManyAuthorInputEnvelope } from './product-to-author-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductToAuthorWhereUniqueInput } from './product-to-author-where-unique.input';

@InputType()
export class ProductToAuthorUncheckedCreateNestedManyWithoutAuthorInput {
  @Field(() => [ProductToAuthorCreateWithoutAuthorInput], { nullable: true })
  @Type(() => ProductToAuthorCreateWithoutAuthorInput)
  create?: Array<ProductToAuthorCreateWithoutAuthorInput>;

  @Field(() => [ProductToAuthorCreateOrConnectWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => ProductToAuthorCreateOrConnectWithoutAuthorInput)
  connectOrCreate?: Array<ProductToAuthorCreateOrConnectWithoutAuthorInput>;

  @Field(() => ProductToAuthorCreateManyAuthorInputEnvelope, { nullable: true })
  @Type(() => ProductToAuthorCreateManyAuthorInputEnvelope)
  createMany?: ProductToAuthorCreateManyAuthorInputEnvelope;

  @Field(() => [ProductToAuthorWhereUniqueInput], { nullable: true })
  @Type(() => ProductToAuthorWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<ProductToAuthorWhereUniqueInput, 'productId_authorId'>
  >;
}
