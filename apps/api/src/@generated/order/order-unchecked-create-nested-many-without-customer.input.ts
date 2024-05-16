import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutCustomerInput } from './order-create-without-customer.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutCustomerInput } from './order-create-or-connect-without-customer.input';
import { OrderCreateManyCustomerInputEnvelope } from './order-create-many-customer-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderUncheckedCreateNestedManyWithoutCustomerInput {
  @Field(() => [OrderCreateWithoutCustomerInput], { nullable: true })
  @Type(() => OrderCreateWithoutCustomerInput)
  create?: Array<OrderCreateWithoutCustomerInput>;

  @Field(() => [OrderCreateOrConnectWithoutCustomerInput], { nullable: true })
  @Type(() => OrderCreateOrConnectWithoutCustomerInput)
  connectOrCreate?: Array<OrderCreateOrConnectWithoutCustomerInput>;

  @Field(() => OrderCreateManyCustomerInputEnvelope, { nullable: true })
  @Type(() => OrderCreateManyCustomerInputEnvelope)
  createMany?: OrderCreateManyCustomerInputEnvelope;

  @Field(() => [OrderWhereUniqueInput], { nullable: true })
  @Type(() => OrderWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;
}
