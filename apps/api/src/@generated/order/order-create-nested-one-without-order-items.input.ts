import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutOrderItemsInput } from './order-create-without-order-items.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutOrderItemsInput } from './order-create-or-connect-without-order-items.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedOneWithoutOrderItemsInput {

    @Field(() => OrderCreateWithoutOrderItemsInput, {nullable:true})
    @Type(() => OrderCreateWithoutOrderItemsInput)
    create?: OrderCreateWithoutOrderItemsInput;

    @Field(() => OrderCreateOrConnectWithoutOrderItemsInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutOrderItemsInput)
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}
