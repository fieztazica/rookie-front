import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductToAuthorWhereUniqueInput } from './product-to-author-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueProductToAuthorArgs {
  @Field(() => ProductToAuthorWhereUniqueInput, { nullable: false })
  @Type(() => ProductToAuthorWhereUniqueInput)
  where!: Prisma.AtLeast<ProductToAuthorWhereUniqueInput, 'productId_authorId'>;
}
