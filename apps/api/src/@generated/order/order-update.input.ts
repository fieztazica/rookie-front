import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { CustomerUpdateOneRequiredWithoutOrdersNestedInput } from '../customer/customer-update-one-required-without-orders-nested.input';
import { OrderItemUpdateManyWithoutOrderNestedInput } from '../order-item/order-item-update-many-without-order-nested.input';

@InputType()
export class OrderUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    total?: Decimal;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CustomerUpdateOneRequiredWithoutOrdersNestedInput, {nullable:true})
    @Type(() => CustomerUpdateOneRequiredWithoutOrdersNestedInput)
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput;

    @Field(() => OrderItemUpdateManyWithoutOrderNestedInput, {nullable:true})
    @Type(() => OrderItemUpdateManyWithoutOrderNestedInput)
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput;
}
