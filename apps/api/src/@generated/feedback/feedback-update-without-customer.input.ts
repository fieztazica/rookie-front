import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductUpdateOneRequiredWithoutFeedbacksNestedInput } from '../product/product-update-one-required-without-feedbacks-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class FeedbackUpdateWithoutCustomerInput {

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

    @Field(() => ProductUpdateOneRequiredWithoutFeedbacksNestedInput, {nullable:true})
    @Type(() => ProductUpdateOneRequiredWithoutFeedbacksNestedInput)
    product?: ProductUpdateOneRequiredWithoutFeedbacksNestedInput;
}
