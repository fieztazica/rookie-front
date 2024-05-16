import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderItemUpdateInput } from './order-item-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';

@ArgsType()
export class UpdateOneOrderItemArgs {
  @Field(() => OrderItemUpdateInput, { nullable: false })
  @Type(() => OrderItemUpdateInput)
  data!: OrderItemUpdateInput;

  @Field(() => OrderItemWhereUniqueInput, { nullable: false })
  @Type(() => OrderItemWhereUniqueInput)
  where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'orderId_productId'>;
}
