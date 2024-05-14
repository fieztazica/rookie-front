import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderItemWhereInput } from './order-item-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyOrderItemArgs {

    @Field(() => OrderItemWhereInput, {nullable:true})
    @Type(() => OrderItemWhereInput)
    where?: OrderItemWhereInput;
}
