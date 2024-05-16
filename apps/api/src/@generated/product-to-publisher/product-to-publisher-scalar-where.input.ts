import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProductToPublisherScalarWhereInput {
  @Field(() => [ProductToPublisherScalarWhereInput], { nullable: true })
  AND?: Array<ProductToPublisherScalarWhereInput>;

  @Field(() => [ProductToPublisherScalarWhereInput], { nullable: true })
  OR?: Array<ProductToPublisherScalarWhereInput>;

  @Field(() => [ProductToPublisherScalarWhereInput], { nullable: true })
  NOT?: Array<ProductToPublisherScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  productId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  publisherId?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;
}
