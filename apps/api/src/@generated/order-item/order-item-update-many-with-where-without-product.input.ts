import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemScalarWhereInput } from './order-item-scalar-where.input';
import { Type } from 'class-transformer';
import { OrderItemUpdateManyMutationInput } from './order-item-update-many-mutation.input';

@InputType()
export class OrderItemUpdateManyWithWhereWithoutProductInput {
  @Field(() => OrderItemScalarWhereInput, { nullable: false })
  @Type(() => OrderItemScalarWhereInput)
  where!: OrderItemScalarWhereInput;

  @Field(() => OrderItemUpdateManyMutationInput, { nullable: false })
  @Type(() => OrderItemUpdateManyMutationInput)
  data!: OrderItemUpdateManyMutationInput;
}
