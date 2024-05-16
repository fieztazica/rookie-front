import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductToAuthorWhereUniqueInput } from './product-to-author-where-unique.input';
import { Type } from 'class-transformer';
import { ProductToAuthorCreateInput } from './product-to-author-create.input';
import { ProductToAuthorUpdateInput } from './product-to-author-update.input';

@ArgsType()
export class UpsertOneProductToAuthorArgs {
  @Field(() => ProductToAuthorWhereUniqueInput, { nullable: false })
  @Type(() => ProductToAuthorWhereUniqueInput)
  where!: Prisma.AtLeast<ProductToAuthorWhereUniqueInput, 'productId_authorId'>;

  @Field(() => ProductToAuthorCreateInput, { nullable: false })
  @Type(() => ProductToAuthorCreateInput)
  create!: ProductToAuthorCreateInput;

  @Field(() => ProductToAuthorUpdateInput, { nullable: false })
  @Type(() => ProductToAuthorUpdateInput)
  update!: ProductToAuthorUpdateInput;
}
