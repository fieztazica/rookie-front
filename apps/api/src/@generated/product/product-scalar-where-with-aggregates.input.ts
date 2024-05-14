import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProductScalarWhereWithAggregatesInput {

    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ProductScalarWhereWithAggregatesInput)
    AND?: Array<ProductScalarWhereWithAggregatesInput>;

    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ProductScalarWhereWithAggregatesInput)
    OR?: Array<ProductScalarWhereWithAggregatesInput>;

    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ProductScalarWhereWithAggregatesInput)
    NOT?: Array<ProductScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    displayName?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    price?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    salePrice?: DecimalWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    accountId?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    deleted?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
