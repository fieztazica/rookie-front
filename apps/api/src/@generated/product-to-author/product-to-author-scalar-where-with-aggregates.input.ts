import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ProductToAuthorScalarWhereWithAggregatesInput {
  @Field(() => [ProductToAuthorScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<ProductToAuthorScalarWhereWithAggregatesInput>;

  @Field(() => [ProductToAuthorScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<ProductToAuthorScalarWhereWithAggregatesInput>;

  @Field(() => [ProductToAuthorScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<ProductToAuthorScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  productId?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  authorId?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;
}
