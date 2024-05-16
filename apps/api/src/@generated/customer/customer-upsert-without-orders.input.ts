import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerUpdateWithoutOrdersInput } from './customer-update-without-orders.input';
import { Type } from 'class-transformer';
import { CustomerCreateWithoutOrdersInput } from './customer-create-without-orders.input';
import { CustomerWhereInput } from './customer-where.input';

@InputType()
export class CustomerUpsertWithoutOrdersInput {
  @Field(() => CustomerUpdateWithoutOrdersInput, { nullable: false })
  @Type(() => CustomerUpdateWithoutOrdersInput)
  update!: CustomerUpdateWithoutOrdersInput;

  @Field(() => CustomerCreateWithoutOrdersInput, { nullable: false })
  @Type(() => CustomerCreateWithoutOrdersInput)
  create!: CustomerCreateWithoutOrdersInput;

  @Field(() => CustomerWhereInput, { nullable: true })
  @Type(() => CustomerWhereInput)
  where?: CustomerWhereInput;
}
