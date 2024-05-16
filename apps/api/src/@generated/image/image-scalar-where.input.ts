import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ImageScalarWhereInput {
  @Field(() => [ImageScalarWhereInput], { nullable: true })
  AND?: Array<ImageScalarWhereInput>;

  @Field(() => [ImageScalarWhereInput], { nullable: true })
  OR?: Array<ImageScalarWhereInput>;

  @Field(() => [ImageScalarWhereInput], { nullable: true })
  NOT?: Array<ImageScalarWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  productId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  url?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  alt?: StringFilter;

  @Field(() => BoolFilter, { nullable: true })
  isThumbnail?: BoolFilter;

  @Field(() => BoolFilter, { nullable: true })
  deleted?: BoolFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;
}
