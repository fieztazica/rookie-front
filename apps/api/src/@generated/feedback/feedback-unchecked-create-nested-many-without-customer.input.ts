import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedbackCreateWithoutCustomerInput } from './feedback-create-without-customer.input';
import { Type } from 'class-transformer';
import { FeedbackCreateOrConnectWithoutCustomerInput } from './feedback-create-or-connect-without-customer.input';
import { FeedbackCreateManyCustomerInputEnvelope } from './feedback-create-many-customer-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';

@InputType()
export class FeedbackUncheckedCreateNestedManyWithoutCustomerInput {
  @Field(() => [FeedbackCreateWithoutCustomerInput], { nullable: true })
  @Type(() => FeedbackCreateWithoutCustomerInput)
  create?: Array<FeedbackCreateWithoutCustomerInput>;

  @Field(() => [FeedbackCreateOrConnectWithoutCustomerInput], {
    nullable: true,
  })
  @Type(() => FeedbackCreateOrConnectWithoutCustomerInput)
  connectOrCreate?: Array<FeedbackCreateOrConnectWithoutCustomerInput>;

  @Field(() => FeedbackCreateManyCustomerInputEnvelope, { nullable: true })
  @Type(() => FeedbackCreateManyCustomerInputEnvelope)
  createMany?: FeedbackCreateManyCustomerInputEnvelope;

  @Field(() => [FeedbackWhereUniqueInput], { nullable: true })
  @Type(() => FeedbackWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>>;
}
