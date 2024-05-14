import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateWithoutOrderInput } from './order-item-create-without-order.input';
import { Type } from 'class-transformer';
import { OrderItemCreateOrConnectWithoutOrderInput } from './order-item-create-or-connect-without-order.input';
import { OrderItemCreateManyOrderInputEnvelope } from './order-item-create-many-order-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';

@InputType()
export class OrderItemCreateNestedManyWithoutOrderInput {

    @Field(() => [OrderItemCreateWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutOrderInput)
    create?: Array<OrderItemCreateWithoutOrderInput>;

    @Field(() => [OrderItemCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutOrderInput>;

    @Field(() => OrderItemCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyOrderInputEnvelope)
    createMany?: OrderItemCreateManyOrderInputEnvelope;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'orderId_productId'>>;
}
