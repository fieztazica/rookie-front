import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductToAuthorWhereUniqueInput } from './product-to-author-where-unique.input';
import { Type } from 'class-transformer';
import { ProductToAuthorCreateWithoutProductInput } from './product-to-author-create-without-product.input';

@InputType()
export class ProductToAuthorCreateOrConnectWithoutProductInput {
  @Field(() => ProductToAuthorWhereUniqueInput, { nullable: false })
  @Type(() => ProductToAuthorWhereUniqueInput)
  where!: Prisma.AtLeast<ProductToAuthorWhereUniqueInput, 'productId_authorId'>;

  @Field(() => ProductToAuthorCreateWithoutProductInput, { nullable: false })
  @Type(() => ProductToAuthorCreateWithoutProductInput)
  create!: ProductToAuthorCreateWithoutProductInput;
}
