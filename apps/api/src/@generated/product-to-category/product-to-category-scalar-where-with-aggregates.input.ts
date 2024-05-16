import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProductToCategoryScalarWhereWithAggregatesInput {
  @Field(() => [ProductToCategoryScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<ProductToCategoryScalarWhereWithAggregatesInput>;

  @Field(() => [ProductToCategoryScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<ProductToCategoryScalarWhereWithAggregatesInput>;

  @Field(() => [ProductToCategoryScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<ProductToCategoryScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  productId?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  categoryId?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;
}
