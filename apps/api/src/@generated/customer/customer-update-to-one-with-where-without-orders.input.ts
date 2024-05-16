import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereInput } from './customer-where.input';
import { Type } from 'class-transformer';
import { CustomerUpdateWithoutOrdersInput } from './customer-update-without-orders.input';

@InputType()
export class CustomerUpdateToOneWithWhereWithoutOrdersInput {
  @Field(() => CustomerWhereInput, { nullable: true })
  @Type(() => CustomerWhereInput)
  where?: CustomerWhereInput;

  @Field(() => CustomerUpdateWithoutOrdersInput, { nullable: false })
  @Type(() => CustomerUpdateWithoutOrdersInput)
  data!: CustomerUpdateWithoutOrdersInput;
}
