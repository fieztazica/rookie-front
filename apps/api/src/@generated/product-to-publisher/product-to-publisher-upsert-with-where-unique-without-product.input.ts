import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductToPublisherWhereUniqueInput } from './product-to-publisher-where-unique.input';
import { Type } from 'class-transformer';
import { ProductToPublisherUpdateWithoutProductInput } from './product-to-publisher-update-without-product.input';
import { ProductToPublisherCreateWithoutProductInput } from './product-to-publisher-create-without-product.input';

@InputType()
export class ProductToPublisherUpsertWithWhereUniqueWithoutProductInput {
  @Field(() => ProductToPublisherWhereUniqueInput, { nullable: false })
  @Type(() => ProductToPublisherWhereUniqueInput)
  where!: Prisma.AtLeast<
    ProductToPublisherWhereUniqueInput,
    'productId_publisherId'
  >;

  @Field(() => ProductToPublisherUpdateWithoutProductInput, { nullable: false })
  @Type(() => ProductToPublisherUpdateWithoutProductInput)
  update!: ProductToPublisherUpdateWithoutProductInput;

  @Field(() => ProductToPublisherCreateWithoutProductInput, { nullable: false })
  @Type(() => ProductToPublisherCreateWithoutProductInput)
  create!: ProductToPublisherCreateWithoutProductInput;
}
