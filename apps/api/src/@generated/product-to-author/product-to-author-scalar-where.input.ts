import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProductToAuthorScalarWhereInput {
  @Field(() => [ProductToAuthorScalarWhereInput], { nullable: true })
  AND?: Array<ProductToAuthorScalarWhereInput>;

  @Field(() => [ProductToAuthorScalarWhereInput], { nullable: true })
  OR?: Array<ProductToAuthorScalarWhereInput>;

  @Field(() => [ProductToAuthorScalarWhereInput], { nullable: true })
  NOT?: Array<ProductToAuthorScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  productId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  authorId?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;
}
