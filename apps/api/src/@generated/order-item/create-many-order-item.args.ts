import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderItemCreateManyInput } from './order-item-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyOrderItemArgs {

    @Field(() => [OrderItemCreateManyInput], {nullable:false})
    @Type(() => OrderItemCreateManyInput)
    data!: Array<OrderItemCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
