import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { CustomerCreateWithoutFeedbackInput } from './customer-create-without-feedback.input';

@InputType()
export class CustomerCreateOrConnectWithoutFeedbackInput {
  @Field(() => CustomerWhereUniqueInput, { nullable: false })
  @Type(() => CustomerWhereUniqueInput)
  where!: Prisma.AtLeast<
    CustomerWhereUniqueInput,
    'id' | 'username' | 'email' | 'phoneNumber'
  >;

  @Field(() => CustomerCreateWithoutFeedbackInput, { nullable: false })
  @Type(() => CustomerCreateWithoutFeedbackInput)
  create!: CustomerCreateWithoutFeedbackInput;
}
