import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutCustomerInput } from './order-create-without-customer.input';

@InputType()
export class OrderCreateOrConnectWithoutCustomerInput {
  @Field(() => OrderWhereUniqueInput, { nullable: false })
  @Type(() => OrderWhereUniqueInput)
  where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;

  @Field(() => OrderCreateWithoutCustomerInput, { nullable: false })
  @Type(() => OrderCreateWithoutCustomerInput)
  create!: OrderCreateWithoutCustomerInput;
}
