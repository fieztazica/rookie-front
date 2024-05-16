import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderListRelationFilter {

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    every?: OrderWhereInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    some?: OrderWhereInput;

    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    none?: OrderWhereInput;
}
