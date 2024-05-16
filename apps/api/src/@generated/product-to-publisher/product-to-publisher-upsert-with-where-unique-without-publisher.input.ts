import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductToPublisherWhereUniqueInput } from './product-to-publisher-where-unique.input';
import { Type } from 'class-transformer';
import { ProductToPublisherUpdateWithoutPublisherInput } from './product-to-publisher-update-without-publisher.input';
import { ProductToPublisherCreateWithoutPublisherInput } from './product-to-publisher-create-without-publisher.input';

@InputType()
export class ProductToPublisherUpsertWithWhereUniqueWithoutPublisherInput {
  @Field(() => ProductToPublisherWhereUniqueInput, { nullable: false })
  @Type(() => ProductToPublisherWhereUniqueInput)
  where!: Prisma.AtLeast<
    ProductToPublisherWhereUniqueInput,
    'productId_publisherId'
  >;

  @Field(() => ProductToPublisherUpdateWithoutPublisherInput, {
    nullable: false,
  })
  @Type(() => ProductToPublisherUpdateWithoutPublisherInput)
  update!: ProductToPublisherUpdateWithoutPublisherInput;

  @Field(() => ProductToPublisherCreateWithoutPublisherInput, {
    nullable: false,
  })
  @Type(() => ProductToPublisherCreateWithoutPublisherInput)
  create!: ProductToPublisherCreateWithoutPublisherInput;
}
