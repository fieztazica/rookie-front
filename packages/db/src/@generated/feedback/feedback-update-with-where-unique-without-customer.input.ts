import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';
import { Type } from 'class-transformer';
import { FeedbackUpdateWithoutCustomerInput } from './feedback-update-without-customer.input';

@InputType()
export class FeedbackUpdateWithWhereUniqueWithoutCustomerInput {

    @Field(() => FeedbackWhereUniqueInput, {nullable:false})
    @Type(() => FeedbackWhereUniqueInput)
    where!: Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>;

    @Field(() => FeedbackUpdateWithoutCustomerInput, {nullable:false})
    @Type(() => FeedbackUpdateWithoutCustomerInput)
    data!: FeedbackUpdateWithoutCustomerInput;
}
