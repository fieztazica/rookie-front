import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductToPublisherWhereUniqueInput } from './product-to-publisher-where-unique.input';
import { Type } from 'class-transformer';
import { ProductToPublisherCreateInput } from './product-to-publisher-create.input';
import { ProductToPublisherUpdateInput } from './product-to-publisher-update.input';

@ArgsType()
export class UpsertOneProductToPublisherArgs {
  @Field(() => ProductToPublisherWhereUniqueInput, { nullable: false })
  @Type(() => ProductToPublisherWhereUniqueInput)
  where!: Prisma.AtLeast<
    ProductToPublisherWhereUniqueInput,
    'productId_publisherId'
  >;

  @Field(() => ProductToPublisherCreateInput, { nullable: false })
  @Type(() => ProductToPublisherCreateInput)
  create!: ProductToPublisherCreateInput;

  @Field(() => ProductToPublisherUpdateInput, { nullable: false })
  @Type(() => ProductToPublisherUpdateInput)
  update!: ProductToPublisherUpdateInput;
}
