import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { Type } from 'class-transformer';
import { OrderUpdateWithoutOrderItemsInput } from './order-update-without-order-items.input';

@InputType()
export class OrderUpdateToOneWithWhereWithoutOrderItemsInput {
  @Field(() => OrderWhereInput, { nullable: true })
  @Type(() => OrderWhereInput)
  where?: OrderWhereInput;

  @Field(() => OrderUpdateWithoutOrderItemsInput, { nullable: false })
  @Type(() => OrderUpdateWithoutOrderItemsInput)
  data!: OrderUpdateWithoutOrderItemsInput;
}
