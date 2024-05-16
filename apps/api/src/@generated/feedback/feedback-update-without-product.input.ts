import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CustomerUpdateOneRequiredWithoutFeedbackNestedInput } from '../customer/customer-update-one-required-without-feedback-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedbackUpdateWithoutProductInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => Int, {nullable:true})
    rating?: number;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CustomerUpdateOneRequiredWithoutFeedbackNestedInput, {nullable:true})
    @Type(() => CustomerUpdateOneRequiredWithoutFeedbackNestedInput)
    customer?: CustomerUpdateOneRequiredWithoutFeedbackNestedInput;
}
