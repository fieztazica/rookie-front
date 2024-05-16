import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateManyCustomerInput } from './order-create-many-customer.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderCreateManyCustomerInputEnvelope {
  @Field(() => [OrderCreateManyCustomerInput], { nullable: false })
  @Type(() => OrderCreateManyCustomerInput)
  data!: Array<OrderCreateManyCustomerInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
