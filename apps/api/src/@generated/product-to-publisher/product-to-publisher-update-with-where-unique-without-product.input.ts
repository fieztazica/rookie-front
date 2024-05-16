import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductToPublisherWhereUniqueInput } from './product-to-publisher-where-unique.input';
import { Type } from 'class-transformer';
import { ProductToPublisherUpdateWithoutProductInput } from './product-to-publisher-update-without-product.input';

@InputType()
export class ProductToPublisherUpdateWithWhereUniqueWithoutProductInput {
  @Field(() => ProductToPublisherWhereUniqueInput, { nullable: false })
  @Type(() => ProductToPublisherWhereUniqueInput)
  where!: Prisma.AtLeast<
    ProductToPublisherWhereUniqueInput,
    'productId_publisherId'
  >;

  @Field(() => ProductToPublisherUpdateWithoutProductInput, { nullable: false })
  @Type(() => ProductToPublisherUpdateWithoutProductInput)
  data!: ProductToPublisherUpdateWithoutProductInput;
}
