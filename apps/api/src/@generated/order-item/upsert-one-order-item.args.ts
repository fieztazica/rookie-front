import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { Type } from 'class-transformer';
import { OrderItemCreateInput } from './order-item-create.input';
import { OrderItemUpdateInput } from './order-item-update.input';

@ArgsType()
export class UpsertOneOrderItemArgs {
  @Field(() => OrderItemWhereUniqueInput, { nullable: false })
  @Type(() => OrderItemWhereUniqueInput)
  where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'orderId_productId'>;

  @Field(() => OrderItemCreateInput, { nullable: false })
  @Type(() => OrderItemCreateInput)
  create!: OrderItemCreateInput;

  @Field(() => OrderItemUpdateInput, { nullable: false })
  @Type(() => OrderItemUpdateInput)
  update!: OrderItemUpdateInput;
}
