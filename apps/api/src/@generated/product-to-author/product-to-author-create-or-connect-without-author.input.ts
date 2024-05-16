import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductToAuthorWhereUniqueInput } from './product-to-author-where-unique.input';
import { Type } from 'class-transformer';
import { ProductToAuthorCreateWithoutAuthorInput } from './product-to-author-create-without-author.input';

@InputType()
export class ProductToAuthorCreateOrConnectWithoutAuthorInput {
  @Field(() => ProductToAuthorWhereUniqueInput, { nullable: false })
  @Type(() => ProductToAuthorWhereUniqueInput)
  where!: Prisma.AtLeast<ProductToAuthorWhereUniqueInput, 'productId_authorId'>;

  @Field(() => ProductToAuthorCreateWithoutAuthorInput, { nullable: false })
  @Type(() => ProductToAuthorCreateWithoutAuthorInput)
  create!: ProductToAuthorCreateWithoutAuthorInput;
}
