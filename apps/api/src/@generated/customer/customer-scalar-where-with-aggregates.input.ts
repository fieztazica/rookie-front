import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumGenderWithAggregatesFilter } from '../prisma/enum-gender-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CustomerScalarWhereWithAggregatesInput {
  @Field(() => [CustomerScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<CustomerScalarWhereWithAggregatesInput>;

  @Field(() => [CustomerScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<CustomerScalarWhereWithAggregatesInput>;

  @Field(() => [CustomerScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<CustomerScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  username?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  phoneNumber?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  firstName?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  lastName?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  displayName?: StringWithAggregatesFilter;

  @Field(() => EnumGenderWithAggregatesFilter, { nullable: true })
  gender?: EnumGenderWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  accountId?: StringWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  deleted?: BoolWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;
}
