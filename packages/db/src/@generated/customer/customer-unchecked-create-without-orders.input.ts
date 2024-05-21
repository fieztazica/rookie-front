import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { FeedbackUncheckedCreateNestedManyWithoutCustomerInput } from '../feedback/feedback-unchecked-create-nested-many-without-customer.input';
import { Type } from 'class-transformer';

@InputType()
export class CustomerUncheckedCreateWithoutOrdersInput {

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

    @Field(() => String, {nullable:true})
    displayName?: string;

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

    @Field(() => FeedbackUncheckedCreateNestedManyWithoutCustomerInput, {nullable:true})
    @Type(() => FeedbackUncheckedCreateNestedManyWithoutCustomerInput)
    feedback?: FeedbackUncheckedCreateNestedManyWithoutCustomerInput;
}