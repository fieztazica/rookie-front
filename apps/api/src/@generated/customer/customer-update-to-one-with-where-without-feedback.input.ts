import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereInput } from './customer-where.input';
import { Type } from 'class-transformer';
import { CustomerUpdateWithoutFeedbackInput } from './customer-update-without-feedback.input';

@InputType()
export class CustomerUpdateToOneWithWhereWithoutFeedbackInput {

    @Field(() => CustomerWhereInput, {nullable:true})
    @Type(() => CustomerWhereInput)
    where?: CustomerWhereInput;

    @Field(() => CustomerUpdateWithoutFeedbackInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutFeedbackInput)
    data!: CustomerUpdateWithoutFeedbackInput;
}
