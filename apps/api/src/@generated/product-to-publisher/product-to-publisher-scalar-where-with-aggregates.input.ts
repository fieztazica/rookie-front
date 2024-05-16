import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProductToPublisherScalarWhereWithAggregatesInput {
  @Field(() => [ProductToPublisherScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<ProductToPublisherScalarWhereWithAggregatesInput>;

  @Field(() => [ProductToPublisherScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<ProductToPublisherScalarWhereWithAggregatesInput>;

  @Field(() => [ProductToPublisherScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<ProductToPublisherScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  productId?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  publisherId?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;
}
