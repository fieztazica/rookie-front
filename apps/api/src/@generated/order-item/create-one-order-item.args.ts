import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderItemCreateInput } from './order-item-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneOrderItemArgs {
  @Field(() => OrderItemCreateInput, { nullable: false })
  @Type(() => OrderItemCreateInput)
  data!: OrderItemCreateInput;
}
