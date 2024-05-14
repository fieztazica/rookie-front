import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereInput } from './customer-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumGenderFilter } from '../prisma/enum-gender-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OrderListRelationFilter } from '../order/order-list-relation-filter.input';
import { Type } from 'class-transformer';
import { FeedbackListRelationFilter } from '../feedback/feedback-list-relation-filter.input';

@InputType()
export class CustomerWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => [CustomerWhereInput], {nullable:true})
    AND?: Array<CustomerWhereInput>;

    @Field(() => [CustomerWhereInput], {nullable:true})
    OR?: Array<CustomerWhereInput>;

    @Field(() => [CustomerWhereInput], {nullable:true})
    NOT?: Array<CustomerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => EnumGenderFilter, {nullable:true})
    gender?: EnumGenderFilter;

    @Field(() => StringFilter, {nullable:true})
    accountId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    deleted?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => OrderListRelationFilter, {nullable:true})
    @Type(() => OrderListRelationFilter)
    orders?: OrderListRelationFilter;

    @Field(() => FeedbackListRelationFilter, {nullable:true})
    @Type(() => FeedbackListRelationFilter)
    feedback?: FeedbackListRelationFilter;
}
