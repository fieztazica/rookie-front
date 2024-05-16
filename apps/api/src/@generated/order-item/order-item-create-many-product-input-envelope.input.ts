import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateManyProductInput } from './order-item-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderItemCreateManyProductInputEnvelope {

    @Field(() => [OrderItemCreateManyProductInput], {nullable:false})
    @Type(() => OrderItemCreateManyProductInput)
    data!: Array<OrderItemCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
