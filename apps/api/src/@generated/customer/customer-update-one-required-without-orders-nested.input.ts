import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutOrdersInput } from './customer-create-without-orders.input';
import { Type } from 'class-transformer';
import { CustomerCreateOrConnectWithoutOrdersInput } from './customer-create-or-connect-without-orders.input';
import { CustomerUpsertWithoutOrdersInput } from './customer-upsert-without-orders.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateToOneWithWhereWithoutOrdersInput } from './customer-update-to-one-with-where-without-orders.input';

@InputType()
export class CustomerUpdateOneRequiredWithoutOrdersNestedInput {
  @Field(() => CustomerCreateWithoutOrdersInput, { nullable: true })
  @Type(() => CustomerCreateWithoutOrdersInput)
  create?: CustomerCreateWithoutOrdersInput;

  @Field(() => CustomerCreateOrConnectWithoutOrdersInput, { nullable: true })
  @Type(() => CustomerCreateOrConnectWithoutOrdersInput)
  connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput;

  @Field(() => CustomerUpsertWithoutOrdersInput, { nullable: true })
  @Type(() => CustomerUpsertWithoutOrdersInput)
  upsert?: CustomerUpsertWithoutOrdersInput;

  @Field(() => CustomerWhereUniqueInput, { nullable: true })
  @Type(() => CustomerWhereUniqueInput)
  connect?: Prisma.AtLeast<
    CustomerWhereUniqueInput,
    'id' | 'username' | 'email' | 'phoneNumber'
  >;

  @Field(() => CustomerUpdateToOneWithWhereWithoutOrdersInput, {
    nullable: true,
  })
  @Type(() => CustomerUpdateToOneWithWhereWithoutOrdersInput)
  update?: CustomerUpdateToOneWithWhereWithoutOrdersInput;
}
