import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateManyOrderInput } from './order-item-create-many-order.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderItemCreateManyOrderInputEnvelope {

    @Field(() => [OrderItemCreateManyOrderInput], {nullable:false})
    @Type(() => OrderItemCreateManyOrderInput)
    data!: Array<OrderItemCreateManyOrderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
