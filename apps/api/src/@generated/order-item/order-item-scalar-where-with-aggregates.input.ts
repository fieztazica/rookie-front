import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class OrderItemScalarWhereWithAggregatesInput {
  @Field(() => [OrderItemScalarWhereWithAggregatesInput], { nullable: true })
  @Type(() => OrderItemScalarWhereWithAggregatesInput)
  AND?: Array<OrderItemScalarWhereWithAggregatesInput>;

  @Field(() => [OrderItemScalarWhereWithAggregatesInput], { nullable: true })
  @Type(() => OrderItemScalarWhereWithAggregatesInput)
  OR?: Array<OrderItemScalarWhereWithAggregatesInput>;

  @Field(() => [OrderItemScalarWhereWithAggregatesInput], { nullable: true })
  @Type(() => OrderItemScalarWhereWithAggregatesInput)
  NOT?: Array<OrderItemScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  orderId?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  productId?: StringWithAggregatesFilter;

  @Field(() => DecimalWithAggregatesFilter, { nullable: true })
  @Type(() => DecimalWithAggregatesFilter)
  price?: DecimalWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  quantity?: IntWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;
}
