import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class OrderScalarWhereWithAggregatesInput {
  @Field(() => [OrderScalarWhereWithAggregatesInput], { nullable: true })
  @Type(() => OrderScalarWhereWithAggregatesInput)
  AND?: Array<OrderScalarWhereWithAggregatesInput>;

  @Field(() => [OrderScalarWhereWithAggregatesInput], { nullable: true })
  @Type(() => OrderScalarWhereWithAggregatesInput)
  OR?: Array<OrderScalarWhereWithAggregatesInput>;

  @Field(() => [OrderScalarWhereWithAggregatesInput], { nullable: true })
  @Type(() => OrderScalarWhereWithAggregatesInput)
  NOT?: Array<OrderScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  customerId?: StringWithAggregatesFilter;

  @Field(() => DecimalWithAggregatesFilter, { nullable: true })
  @Type(() => DecimalWithAggregatesFilter)
  total?: DecimalWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  deleted?: BoolWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;
}
