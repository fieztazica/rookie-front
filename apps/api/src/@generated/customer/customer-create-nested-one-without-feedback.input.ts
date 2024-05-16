import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutFeedbackInput } from './customer-create-without-feedback.input';
import { Type } from 'class-transformer';
import { CustomerCreateOrConnectWithoutFeedbackInput } from './customer-create-or-connect-without-feedback.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@InputType()
export class CustomerCreateNestedOneWithoutFeedbackInput {
  @Field(() => CustomerCreateWithoutFeedbackInput, { nullable: true })
  @Type(() => CustomerCreateWithoutFeedbackInput)
  create?: CustomerCreateWithoutFeedbackInput;

  @Field(() => CustomerCreateOrConnectWithoutFeedbackInput, { nullable: true })
  @Type(() => CustomerCreateOrConnectWithoutFeedbackInput)
  connectOrCreate?: CustomerCreateOrConnectWithoutFeedbackInput;

  @Field(() => CustomerWhereUniqueInput, { nullable: true })
  @Type(() => CustomerWhereUniqueInput)
  connect?: Prisma.AtLeast<
    CustomerWhereUniqueInput,
    'id' | 'username' | 'email' | 'phoneNumber'
  >;
}
