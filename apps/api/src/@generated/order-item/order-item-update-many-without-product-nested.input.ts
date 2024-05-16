import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateWithoutProductInput } from './order-item-create-without-product.input';
import { Type } from 'class-transformer';
import { OrderItemCreateOrConnectWithoutProductInput } from './order-item-create-or-connect-without-product.input';
import { OrderItemUpsertWithWhereUniqueWithoutProductInput } from './order-item-upsert-with-where-unique-without-product.input';
import { OrderItemCreateManyProductInputEnvelope } from './order-item-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { OrderItemUpdateWithWhereUniqueWithoutProductInput } from './order-item-update-with-where-unique-without-product.input';
import { OrderItemUpdateManyWithWhereWithoutProductInput } from './order-item-update-many-with-where-without-product.input';
import { OrderItemScalarWhereInput } from './order-item-scalar-where.input';

@InputType()
export class OrderItemUpdateManyWithoutProductNestedInput {
  @Field(() => [OrderItemCreateWithoutProductInput], { nullable: true })
  @Type(() => OrderItemCreateWithoutProductInput)
  create?: Array<OrderItemCreateWithoutProductInput>;

  @Field(() => [OrderItemCreateOrConnectWithoutProductInput], {
    nullable: true,
  })
  @Type(() => OrderItemCreateOrConnectWithoutProductInput)
  connectOrCreate?: Array<OrderItemCreateOrConnectWithoutProductInput>;

  @Field(() => [OrderItemUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true,
  })
  @Type(() => OrderItemUpsertWithWhereUniqueWithoutProductInput)
  upsert?: Array<OrderItemUpsertWithWhereUniqueWithoutProductInput>;

  @Field(() => OrderItemCreateManyProductInputEnvelope, { nullable: true })
  @Type(() => OrderItemCreateManyProductInputEnvelope)
  createMany?: OrderItemCreateManyProductInputEnvelope;

  @Field(() => [OrderItemWhereUniqueInput], { nullable: true })
  @Type(() => OrderItemWhereUniqueInput)
  set?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'orderId_productId'>>;

  @Field(() => [OrderItemWhereUniqueInput], { nullable: true })
  @Type(() => OrderItemWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<OrderItemWhereUniqueInput, 'orderId_productId'>
  >;

  @Field(() => [OrderItemWhereUniqueInput], { nullable: true })
  @Type(() => OrderItemWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<OrderItemWhereUniqueInput, 'orderId_productId'>
  >;

  @Field(() => [OrderItemWhereUniqueInput], { nullable: true })
  @Type(() => OrderItemWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<OrderItemWhereUniqueInput, 'orderId_productId'>
  >;

  @Field(() => [OrderItemUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true,
  })
  @Type(() => OrderItemUpdateWithWhereUniqueWithoutProductInput)
  update?: Array<OrderItemUpdateWithWhereUniqueWithoutProductInput>;

  @Field(() => [OrderItemUpdateManyWithWhereWithoutProductInput], {
    nullable: true,
  })
  @Type(() => OrderItemUpdateManyWithWhereWithoutProductInput)
  updateMany?: Array<OrderItemUpdateManyWithWhereWithoutProductInput>;

  @Field(() => [OrderItemScalarWhereInput], { nullable: true })
  @Type(() => OrderItemScalarWhereInput)
  deleteMany?: Array<OrderItemScalarWhereInput>;
}
