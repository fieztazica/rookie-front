import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { Type } from 'class-transformer';
import { OrderItemUpdateWithoutProductInput } from './order-item-update-without-product.input';

@InputType()
export class OrderItemUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'orderId_productId'>;

    @Field(() => OrderItemUpdateWithoutProductInput, {nullable:false})
    @Type(() => OrderItemUpdateWithoutProductInput)
    data!: OrderItemUpdateWithoutProductInput;
}
