import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerUpdateWithoutFeedbackInput } from './customer-update-without-feedback.input';
import { Type } from 'class-transformer';
import { CustomerCreateWithoutFeedbackInput } from './customer-create-without-feedback.input';
import { CustomerWhereInput } from './customer-where.input';

@InputType()
export class CustomerUpsertWithoutFeedbackInput {
  @Field(() => CustomerUpdateWithoutFeedbackInput, { nullable: false })
  @Type(() => CustomerUpdateWithoutFeedbackInput)
  update!: CustomerUpdateWithoutFeedbackInput;

  @Field(() => CustomerCreateWithoutFeedbackInput, { nullable: false })
  @Type(() => CustomerCreateWithoutFeedbackInput)
  create!: CustomerCreateWithoutFeedbackInput;

  @Field(() => CustomerWhereInput, { nullable: true })
  @Type(() => CustomerWhereInput)
  where?: CustomerWhereInput;
}
