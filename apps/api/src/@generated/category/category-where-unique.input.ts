import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductToCategoryListRelationFilter } from '../product-to-category/product-to-category-list-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [CategoryWhereInput], { nullable: true })
  AND?: Array<CategoryWhereInput>;

  @Field(() => [CategoryWhereInput], { nullable: true })
  OR?: Array<CategoryWhereInput>;

  @Field(() => [CategoryWhereInput], { nullable: true })
  NOT?: Array<CategoryWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  description?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  displayName?: StringFilter;

  @Field(() => BoolFilter, { nullable: true })
  deleted?: BoolFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => ProductToCategoryListRelationFilter, { nullable: true })
  @Type(() => ProductToCategoryListRelationFilter)
  products?: ProductToCategoryListRelationFilter;
}
