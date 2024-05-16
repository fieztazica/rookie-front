import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateWithoutOrderInput } from './order-item-create-without-order.input';
import { Type } from 'class-transformer';
import { OrderItemCreateOrConnectWithoutOrderInput } from './order-item-create-or-connect-without-order.input';
import { OrderItemUpsertWithWhereUniqueWithoutOrderInput } from './order-item-upsert-with-where-unique-without-order.input';
import { OrderItemCreateManyOrderInputEnvelope } from './order-item-create-many-order-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { OrderItemUpdateWithWhereUniqueWithoutOrderInput } from './order-item-update-with-where-unique-without-order.input';
import { OrderItemUpdateManyWithWhereWithoutOrderInput } from './order-item-update-many-with-where-without-order.input';
import { OrderItemScalarWhereInput } from './order-item-scalar-where.input';

@InputType()
export class OrderItemUpdateManyWithoutOrderNestedInput {

    @Field(() => [OrderItemCreateWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutOrderInput)
    create?: Array<OrderItemCreateWithoutOrderInput>;

    @Field(() => [OrderItemCreateOrConnectWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutOrderInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutOrderInput>;

    @Field(() => [OrderItemUpsertWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemUpsertWithWhereUniqueWithoutOrderInput)
    upsert?: Array<OrderItemUpsertWithWhereUniqueWithoutOrderInput>;

    @Field(() => OrderItemCreateManyOrderInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyOrderInputEnvelope)
    createMany?: OrderItemCreateManyOrderInputEnvelope;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'orderId_productId'>>;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'orderId_productId'>>;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'orderId_productId'>>;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'orderId_productId'>>;

    @Field(() => [OrderItemUpdateWithWhereUniqueWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemUpdateWithWhereUniqueWithoutOrderInput)
    update?: Array<OrderItemUpdateWithWhereUniqueWithoutOrderInput>;

    @Field(() => [OrderItemUpdateManyWithWhereWithoutOrderInput], {nullable:true})
    @Type(() => OrderItemUpdateManyWithWhereWithoutOrderInput)
    updateMany?: Array<OrderItemUpdateManyWithWhereWithoutOrderInput>;

    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    @Type(() => OrderItemScalarWhereInput)
    deleteMany?: Array<OrderItemScalarWhereInput>;
}
