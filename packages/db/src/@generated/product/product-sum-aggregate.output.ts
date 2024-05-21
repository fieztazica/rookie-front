import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductSumAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    price?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    salePrice?: Decimal;

    @Field(() => Int, {nullable:true})
    storeQuantity?: number;
}
