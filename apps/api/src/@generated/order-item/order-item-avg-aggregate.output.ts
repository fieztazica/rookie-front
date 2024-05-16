import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class OrderItemAvgAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    price?: Decimal;

    @Field(() => Float, {nullable:true})
    quantity?: number;
}
