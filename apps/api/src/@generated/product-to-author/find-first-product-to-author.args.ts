import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToAuthorWhereInput } from './product-to-author-where.input';
import { Type } from 'class-transformer';
import { ProductToAuthorOrderByWithRelationInput } from './product-to-author-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductToAuthorWhereUniqueInput } from './product-to-author-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductToAuthorScalarFieldEnum } from './product-to-author-scalar-field.enum';

@ArgsType()
export class FindFirstProductToAuthorArgs {
  @Field(() => ProductToAuthorWhereInput, { nullable: true })
  @Type(() => ProductToAuthorWhereInput)
  where?: ProductToAuthorWhereInput;

  @Field(() => [ProductToAuthorOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ProductToAuthorOrderByWithRelationInput>;

  @Field(() => ProductToAuthorWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    ProductToAuthorWhereUniqueInput,
    'productId_authorId'
  >;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [ProductToAuthorScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ProductToAuthorScalarFieldEnum>;
}
