import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { Type } from 'class-transformer';
import { OrderItemCreateWithoutProductInput } from './order-item-create-without-product.input';

@InputType()
export class OrderItemCreateOrConnectWithoutProductInput {

    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'orderId_productId'>;

    @Field(() => OrderItemCreateWithoutProductInput, {nullable:false})
    @Type(() => OrderItemCreateWithoutProductInput)
    create!: OrderItemCreateWithoutProductInput;
}
