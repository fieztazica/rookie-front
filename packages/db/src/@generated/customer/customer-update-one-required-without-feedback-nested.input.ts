import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutFeedbackInput } from './customer-create-without-feedback.input';
import { Type } from 'class-transformer';
import { CustomerCreateOrConnectWithoutFeedbackInput } from './customer-create-or-connect-without-feedback.input';
import { CustomerUpsertWithoutFeedbackInput } from './customer-upsert-without-feedback.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateToOneWithWhereWithoutFeedbackInput } from './customer-update-to-one-with-where-without-feedback.input';

@InputType()
export class CustomerUpdateOneRequiredWithoutFeedbackNestedInput {

    @Field(() => CustomerCreateWithoutFeedbackInput, {nullable:true})
    @Type(() => CustomerCreateWithoutFeedbackInput)
    create?: CustomerCreateWithoutFeedbackInput;

    @Field(() => CustomerCreateOrConnectWithoutFeedbackInput, {nullable:true})
    @Type(() => CustomerCreateOrConnectWithoutFeedbackInput)
    connectOrCreate?: CustomerCreateOrConnectWithoutFeedbackInput;

    @Field(() => CustomerUpsertWithoutFeedbackInput, {nullable:true})
    @Type(() => CustomerUpsertWithoutFeedbackInput)
    upsert?: CustomerUpsertWithoutFeedbackInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    connect?: Prisma.AtLeast<CustomerWhereUniqueInput, 'id' | 'username' | 'email' | 'phoneNumber'>;

    @Field(() => CustomerUpdateToOneWithWhereWithoutFeedbackInput, {nullable:true})
    @Type(() => CustomerUpdateToOneWithWhereWithoutFeedbackInput)
    update?: CustomerUpdateToOneWithWhereWithoutFeedbackInput;
}
