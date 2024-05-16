import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateWithoutOrderItemsInput } from './order-update-without-order-items.input';
import { Type } from 'class-transformer';
import { OrderCreateWithoutOrderItemsInput } from './order-create-without-order-items.input';
import { OrderWhereInput } from './order-where.input';

@InputType()
export class OrderUpsertWithoutOrderItemsInput {

    @Field(() => OrderUpdateWithoutOrderItemsInput, {nullable:false})
    @Type(() => OrderUpdateWithoutOrderItemsInput)
    update!: OrderUpdateWithoutOrderItemsInput;

    @Field(() => OrderCreateWithoutOrderItemsInput, {nullable:false})
    @Type(() => OrderCreateWithoutOrderItemsInput)
    create!: OrderCreateWithoutOrderItemsInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    where?: OrderWhereInput;
}
