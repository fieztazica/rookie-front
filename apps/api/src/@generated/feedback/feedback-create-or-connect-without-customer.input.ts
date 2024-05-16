import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';
import { Type } from 'class-transformer';
import { FeedbackCreateWithoutCustomerInput } from './feedback-create-without-customer.input';

@InputType()
export class FeedbackCreateOrConnectWithoutCustomerInput {

    @Field(() => FeedbackWhereUniqueInput, {nullable:false})
    @Type(() => FeedbackWhereUniqueInput)
    where!: Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>;

    @Field(() => FeedbackCreateWithoutCustomerInput, {nullable:false})
    @Type(() => FeedbackCreateWithoutCustomerInput)
    create!: FeedbackCreateWithoutCustomerInput;
}
