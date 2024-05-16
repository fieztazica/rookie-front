import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { OrderItemCreateNestedManyWithoutOrderInput } from '../order-item/order-item-create-nested-many-without-order.input';

@InputType()
export class OrderCreateWithoutCustomerInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => GraphQLDecimal, { nullable: false })
  @Type(() => Object)
  @Transform(transformToDecimal)
  total!: Decimal;

  @Field(() => Boolean, { nullable: true })
  deleted?: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => OrderItemCreateNestedManyWithoutOrderInput, { nullable: true })
  @Type(() => OrderItemCreateNestedManyWithoutOrderInput)
  orderItems?: OrderItemCreateNestedManyWithoutOrderInput;
}
