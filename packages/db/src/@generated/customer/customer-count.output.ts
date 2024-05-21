import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CustomerCount {

    @Field(() => Int, {nullable:false})
    orders?: number;

    @Field(() => Int, {nullable:false})
    feedback?: number;
}
