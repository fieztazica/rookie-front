import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Customer } from '../customer/customer.model';
import { OrderItem } from '../order-item/order-item.model';
import { OrderCount } from './order-count.output';

/**
 * @@deny('read', deleted)
 */
@ObjectType({description:"@@deny('read', deleted)"})
export class Order {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    customerId!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    total!: Decimal;

    /**
     * @omit
     */
    @Field(() => Boolean, {nullable:false,defaultValue:false,description:'@omit'})
    deleted!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Customer, {nullable:false})
    customer?: Customer;

    @Field(() => [OrderItem], {nullable:true})
    orderItems?: Array<OrderItem>;

    @Field(() => OrderCount, {nullable:false})
    _count?: OrderCount;
}
