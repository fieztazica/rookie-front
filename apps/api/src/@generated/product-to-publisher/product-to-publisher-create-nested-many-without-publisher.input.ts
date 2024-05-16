import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToPublisherCreateWithoutPublisherInput } from './product-to-publisher-create-without-publisher.input';
import { Type } from 'class-transformer';
import { ProductToPublisherCreateOrConnectWithoutPublisherInput } from './product-to-publisher-create-or-connect-without-publisher.input';
import { ProductToPublisherCreateManyPublisherInputEnvelope } from './product-to-publisher-create-many-publisher-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductToPublisherWhereUniqueInput } from './product-to-publisher-where-unique.input';

@InputType()
export class ProductToPublisherCreateNestedManyWithoutPublisherInput {
  @Field(() => [ProductToPublisherCreateWithoutPublisherInput], {
    nullable: true,
  })
  @Type(() => ProductToPublisherCreateWithoutPublisherInput)
  create?: Array<ProductToPublisherCreateWithoutPublisherInput>;

  @Field(() => [ProductToPublisherCreateOrConnectWithoutPublisherInput], {
    nullable: true,
  })
  @Type(() => ProductToPublisherCreateOrConnectWithoutPublisherInput)
  connectOrCreate?: Array<ProductToPublisherCreateOrConnectWithoutPublisherInput>;

  @Field(() => ProductToPublisherCreateManyPublisherInputEnvelope, {
    nullable: true,
  })
  @Type(() => ProductToPublisherCreateManyPublisherInputEnvelope)
  createMany?: ProductToPublisherCreateManyPublisherInputEnvelope;

  @Field(() => [ProductToPublisherWhereUniqueInput], { nullable: true })
  @Type(() => ProductToPublisherWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<ProductToPublisherWhereUniqueInput, 'productId_publisherId'>
  >;
}
