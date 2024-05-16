import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutOrderItemsInput } from './order-create-without-order-items.input';
import { Type } from 'class-transformer';
import { OrderCreateOrConnectWithoutOrderItemsInput } from './order-create-or-connect-without-order-items.input';
import { OrderUpsertWithoutOrderItemsInput } from './order-upsert-without-order-items.input';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateToOneWithWhereWithoutOrderItemsInput } from './order-update-to-one-with-where-without-order-items.input';

@InputType()
export class OrderUpdateOneRequiredWithoutOrderItemsNestedInput {

    @Field(() => OrderCreateWithoutOrderItemsInput, {nullable:true})
    @Type(() => OrderCreateWithoutOrderItemsInput)
    create?: OrderCreateWithoutOrderItemsInput;

    @Field(() => OrderCreateOrConnectWithoutOrderItemsInput, {nullable:true})
    @Type(() => OrderCreateOrConnectWithoutOrderItemsInput)
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput;

    @Field(() => OrderUpsertWithoutOrderItemsInput, {nullable:true})
    @Type(() => OrderUpsertWithoutOrderItemsInput)
    upsert?: OrderUpsertWithoutOrderItemsInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    @Type(() => OrderWhereUniqueInput)
    connect?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;

    @Field(() => OrderUpdateToOneWithWhereWithoutOrderItemsInput, {nullable:true})
    @Type(() => OrderUpdateToOneWithWhereWithoutOrderItemsInput)
    update?: OrderUpdateToOneWithWhereWithoutOrderItemsInput;
}
