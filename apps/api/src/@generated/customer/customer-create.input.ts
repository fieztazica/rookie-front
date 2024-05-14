import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { OrderCreateNestedManyWithoutCustomerInput } from '../order/order-create-nested-many-without-customer.input';
import { Type } from 'class-transformer';
import { FeedbackCreateNestedManyWithoutCustomerInput } from '../feedback/feedback-create-nested-many-without-customer.input';

@InputType()
export class CustomerCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => Gender, {nullable:true})
    gender?: keyof typeof Gender;

    @Field(() => String, {nullable:true})
    accountId?: string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderCreateNestedManyWithoutCustomerInput, {nullable:true})
    @Type(() => OrderCreateNestedManyWithoutCustomerInput)
    orders?: OrderCreateNestedManyWithoutCustomerInput;

    @Field(() => FeedbackCreateNestedManyWithoutCustomerInput, {nullable:true})
    @Type(() => FeedbackCreateNestedManyWithoutCustomerInput)
    feedback?: FeedbackCreateNestedManyWithoutCustomerInput;
}
