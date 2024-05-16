import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderUpdateWithoutCustomerInput } from './order-update-without-customer.input';
import { OrderCreateWithoutCustomerInput } from './order-create-without-customer.input';

@InputType()
export class OrderUpsertWithWhereUniqueWithoutCustomerInput {
  @Field(() => OrderWhereUniqueInput, { nullable: false })
  @Type(() => OrderWhereUniqueInput)
  where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;

  @Field(() => OrderUpdateWithoutCustomerInput, { nullable: false })
  @Type(() => OrderUpdateWithoutCustomerInput)
  update!: OrderUpdateWithoutCustomerInput;

  @Field(() => OrderCreateWithoutCustomerInput, { nullable: false })
  @Type(() => OrderCreateWithoutCustomerInput)
  create!: OrderCreateWithoutCustomerInput;
}
