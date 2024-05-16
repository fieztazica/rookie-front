import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateWithoutProductInput } from './order-item-create-without-product.input';
import { Type } from 'class-transformer';
import { OrderItemCreateOrConnectWithoutProductInput } from './order-item-create-or-connect-without-product.input';
import { OrderItemCreateManyProductInputEnvelope } from './order-item-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';

@InputType()
export class OrderItemCreateNestedManyWithoutProductInput {
  @Field(() => [OrderItemCreateWithoutProductInput], { nullable: true })
  @Type(() => OrderItemCreateWithoutProductInput)
  create?: Array<OrderItemCreateWithoutProductInput>;

  @Field(() => [OrderItemCreateOrConnectWithoutProductInput], {
    nullable: true,
  })
  @Type(() => OrderItemCreateOrConnectWithoutProductInput)
  connectOrCreate?: Array<OrderItemCreateOrConnectWithoutProductInput>;

  @Field(() => OrderItemCreateManyProductInputEnvelope, { nullable: true })
  @Type(() => OrderItemCreateManyProductInputEnvelope)
  createMany?: OrderItemCreateManyProductInputEnvelope;

  @Field(() => [OrderItemWhereUniqueInput], { nullable: true })
  @Type(() => OrderItemWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<OrderItemWhereUniqueInput, 'orderId_productId'>
  >;
}
