import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { Type } from 'class-transformer';
import { OrderItemUpdateWithoutOrderInput } from './order-item-update-without-order.input';
import { OrderItemCreateWithoutOrderInput } from './order-item-create-without-order.input';

@InputType()
export class OrderItemUpsertWithWhereUniqueWithoutOrderInput {
  @Field(() => OrderItemWhereUniqueInput, { nullable: false })
  @Type(() => OrderItemWhereUniqueInput)
  where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'orderId_productId'>;

  @Field(() => OrderItemUpdateWithoutOrderInput, { nullable: false })
  @Type(() => OrderItemUpdateWithoutOrderInput)
  update!: OrderItemUpdateWithoutOrderInput;

  @Field(() => OrderItemCreateWithoutOrderInput, { nullable: false })
  @Type(() => OrderItemCreateWithoutOrderInput)
  create!: OrderItemCreateWithoutOrderInput;
}
