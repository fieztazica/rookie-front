import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutCustomerInput } from './order-create-without-customer.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutCustomerInput } from './order-create-or-connect-without-customer.input';
import { OrderUpsertWithWhereUniqueWithoutCustomerInput } from './order-upsert-with-where-unique-without-customer.input';
import { OrderCreateManyCustomerInputEnvelope } from './order-create-many-customer-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithWhereUniqueWithoutCustomerInput } from './order-update-with-where-unique-without-customer.input';
import { OrderUpdateManyWithWhereWithoutCustomerInput } from './order-update-many-with-where-without-customer.input';
import { OrderScalarWhereInput } from './order-scalar-where.input';

@InputType()
export class OrderUpdateManyWithoutCustomerNestedInput {

    @Field(() => [OrderCreateWithoutCustomerInput], {nullable:true})
    @Type(() => OrderCreateWithoutCustomerInput)
    create?: Array<OrderCreateWithoutCustomerInput>;

    @Field(() => [OrderCreateOrConnectWithoutCustomerInput], {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutCustomerInput)
    connectOrCreate?: Array<OrderCreateOrConnectWithoutCustomerInput>;

    @Field(() => [OrderUpsertWithWhereUniqueWithoutCustomerInput], {nullable:true})
    @Type(() => OrderUpsertWithWhereUniqueWithoutCustomerInput)
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutCustomerInput>;

    @Field(() => OrderCreateManyCustomerInputEnvelope, {nullable:true})
    @Type(() => OrderCreateManyCustomerInputEnvelope)
    createMany?: OrderCreateManyCustomerInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderWhereUniqueInput, 'id'>>;

    @Field(() => [OrderUpdateWithWhereUniqueWithoutCustomerInput], {nullable:true})
    @Type(() => OrderUpdateWithWhereUniqueWithoutCustomerInput)
    update?: Array<OrderUpdateWithWhereUniqueWithoutCustomerInput>;

    @Field(() => [OrderUpdateManyWithWhereWithoutCustomerInput], {nullable:true})
    @Type(() => OrderUpdateManyWithWhereWithoutCustomerInput)
    updateMany?: Array<OrderUpdateManyWithWhereWithoutCustomerInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    @Type(() => OrderScalarWhereInput)
    deleteMany?: Array<OrderScalarWhereInput>;
}
