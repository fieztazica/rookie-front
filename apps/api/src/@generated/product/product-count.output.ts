import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductCount {

    @Field(() => Int, {nullable:false})
    categories?: number;

    @Field(() => Int, {nullable:false})
    orderItems?: number;

    @Field(() => Int, {nullable:false})
    feedbacks?: number;

    @Field(() => Int, {nullable:false})
    images?: number;
}
