import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CustomerRelationFilter } from '../customer/customer-relation-filter.input';
import { Type } from 'class-transformer';
import { ProductRelationFilter } from '../product/product-relation-filter.input';

@InputType()
export class FeedbackWhereInput {
  @Field(() => [FeedbackWhereInput], { nullable: true })
  AND?: Array<FeedbackWhereInput>;

  @Field(() => [FeedbackWhereInput], { nullable: true })
  OR?: Array<FeedbackWhereInput>;

  @Field(() => [FeedbackWhereInput], { nullable: true })
  NOT?: Array<FeedbackWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  customerId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  productId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  message?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  rating?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  status?: StringFilter;

  @Field(() => BoolFilter, { nullable: true })
  deleted?: BoolFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => CustomerRelationFilter, { nullable: true })
  @Type(() => CustomerRelationFilter)
  customer?: CustomerRelationFilter;

  @Field(() => ProductRelationFilter, { nullable: true })
  @Type(() => ProductRelationFilter)
  product?: ProductRelationFilter;
}
