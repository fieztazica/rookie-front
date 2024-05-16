import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrderItemSumAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    price?: Decimal;

    @Field(() => Int, {nullable:true})
    quantity?: number;
}
