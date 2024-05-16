import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutOrdersInput } from './customer-create-without-orders.input';
import { Type } from 'class-transformer';
import { CustomerCreateOrConnectWithoutOrdersInput } from './customer-create-or-connect-without-orders.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@InputType()
export class CustomerCreateNestedOneWithoutOrdersInput {
  @Field(() => CustomerCreateWithoutOrdersInput, { nullable: true })
  @Type(() => CustomerCreateWithoutOrdersInput)
  create?: CustomerCreateWithoutOrdersInput;

  @Field(() => CustomerCreateOrConnectWithoutOrdersInput, { nullable: true })
  @Type(() => CustomerCreateOrConnectWithoutOrdersInput)
  connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput;

  @Field(() => CustomerWhereUniqueInput, { nullable: true })
  @Type(() => CustomerWhereUniqueInput)
  connect?: Prisma.AtLeast<
    CustomerWhereUniqueInput,
    'id' | 'username' | 'email' | 'phoneNumber'
  >;
}
