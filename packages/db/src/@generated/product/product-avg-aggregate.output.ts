import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ProductAvgAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    price?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    salePrice?: Decimal;

    @Field(() => Float, {nullable:true})
    ratings?: number;

    @Field(() => Float, {nullable:true})
    storeQuantity?: number;
}
