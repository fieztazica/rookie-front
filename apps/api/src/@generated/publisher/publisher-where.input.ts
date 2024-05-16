import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductToPublisherListRelationFilter } from '../product-to-publisher/product-to-publisher-list-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class PublisherWhereInput {
  @Field(() => [PublisherWhereInput], { nullable: true })
  AND?: Array<PublisherWhereInput>;

  @Field(() => [PublisherWhereInput], { nullable: true })
  OR?: Array<PublisherWhereInput>;

  @Field(() => [PublisherWhereInput], { nullable: true })
  NOT?: Array<PublisherWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  displayName?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  phoneNumber?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  website?: StringFilter;

  @Field(() => BoolFilter, { nullable: true })
  deleted?: BoolFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => ProductToPublisherListRelationFilter, { nullable: true })
  @Type(() => ProductToPublisherListRelationFilter)
  products?: ProductToPublisherListRelationFilter;
}
