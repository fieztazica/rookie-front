import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedbackCreateManyCustomerInput } from './feedback-create-many-customer.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedbackCreateManyCustomerInputEnvelope {
  @Field(() => [FeedbackCreateManyCustomerInput], { nullable: false })
  @Type(() => FeedbackCreateManyCustomerInput)
  data!: Array<FeedbackCreateManyCustomerInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
