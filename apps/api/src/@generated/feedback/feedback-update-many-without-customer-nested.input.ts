import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedbackCreateWithoutCustomerInput } from './feedback-create-without-customer.input';
import { Type } from 'class-transformer';
import { FeedbackCreateOrConnectWithoutCustomerInput } from './feedback-create-or-connect-without-customer.input';
import { FeedbackUpsertWithWhereUniqueWithoutCustomerInput } from './feedback-upsert-with-where-unique-without-customer.input';
import { FeedbackCreateManyCustomerInputEnvelope } from './feedback-create-many-customer-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';
import { FeedbackUpdateWithWhereUniqueWithoutCustomerInput } from './feedback-update-with-where-unique-without-customer.input';
import { FeedbackUpdateManyWithWhereWithoutCustomerInput } from './feedback-update-many-with-where-without-customer.input';
import { FeedbackScalarWhereInput } from './feedback-scalar-where.input';

@InputType()
export class FeedbackUpdateManyWithoutCustomerNestedInput {

    @Field(() => [FeedbackCreateWithoutCustomerInput], {nullable:true})
    @Type(() => FeedbackCreateWithoutCustomerInput)
    create?: Array<FeedbackCreateWithoutCustomerInput>;

    @Field(() => [FeedbackCreateOrConnectWithoutCustomerInput], {nullable:true})
    @Type(() => FeedbackCreateOrConnectWithoutCustomerInput)
    connectOrCreate?: Array<FeedbackCreateOrConnectWithoutCustomerInput>;

    @Field(() => [FeedbackUpsertWithWhereUniqueWithoutCustomerInput], {nullable:true})
    @Type(() => FeedbackUpsertWithWhereUniqueWithoutCustomerInput)
    upsert?: Array<FeedbackUpsertWithWhereUniqueWithoutCustomerInput>;

    @Field(() => FeedbackCreateManyCustomerInputEnvelope, {nullable:true})
    @Type(() => FeedbackCreateManyCustomerInputEnvelope)
    createMany?: FeedbackCreateManyCustomerInputEnvelope;

    @Field(() => [FeedbackWhereUniqueInput], {nullable:true})
    @Type(() => FeedbackWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>>;

    @Field(() => [FeedbackWhereUniqueInput], {nullable:true})
    @Type(() => FeedbackWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>>;

    @Field(() => [FeedbackWhereUniqueInput], {nullable:true})
    @Type(() => FeedbackWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>>;

    @Field(() => [FeedbackWhereUniqueInput], {nullable:true})
    @Type(() => FeedbackWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>>;

    @Field(() => [FeedbackUpdateWithWhereUniqueWithoutCustomerInput], {nullable:true})
    @Type(() => FeedbackUpdateWithWhereUniqueWithoutCustomerInput)
    update?: Array<FeedbackUpdateWithWhereUniqueWithoutCustomerInput>;

    @Field(() => [FeedbackUpdateManyWithWhereWithoutCustomerInput], {nullable:true})
    @Type(() => FeedbackUpdateManyWithWhereWithoutCustomerInput)
    updateMany?: Array<FeedbackUpdateManyWithWhereWithoutCustomerInput>;

    @Field(() => [FeedbackScalarWhereInput], {nullable:true})
    @Type(() => FeedbackScalarWhereInput)
    deleteMany?: Array<FeedbackScalarWhereInput>;
}
