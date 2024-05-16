import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductToPublisherWhereUniqueInput } from './product-to-publisher-where-unique.input';
import { Type } from 'class-transformer';
import { ProductToPublisherCreateWithoutPublisherInput } from './product-to-publisher-create-without-publisher.input';

@InputType()
export class ProductToPublisherCreateOrConnectWithoutPublisherInput {
  @Field(() => ProductToPublisherWhereUniqueInput, { nullable: false })
  @Type(() => ProductToPublisherWhereUniqueInput)
  where!: Prisma.AtLeast<
    ProductToPublisherWhereUniqueInput,
    'productId_publisherId'
  >;

  @Field(() => ProductToPublisherCreateWithoutPublisherInput, {
    nullable: false,
  })
  @Type(() => ProductToPublisherCreateWithoutPublisherInput)
  create!: ProductToPublisherCreateWithoutPublisherInput;
}
