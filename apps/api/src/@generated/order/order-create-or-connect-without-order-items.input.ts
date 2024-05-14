import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutOrderItemsInput } from './order-create-without-order-items.input';

@InputType()
export class OrderCreateOrConnectWithoutOrderItemsInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;

    @Field(() => OrderCreateWithoutOrderItemsInput, {nullable:false})
    @Type(() => OrderCreateWithoutOrderItemsInput)
    create!: OrderCreateWithoutOrderItemsInput;
}
