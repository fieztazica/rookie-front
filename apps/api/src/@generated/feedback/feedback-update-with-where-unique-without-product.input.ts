import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';
import { Type } from 'class-transformer';
import { FeedbackUpdateWithoutProductInput } from './feedback-update-without-product.input';

@InputType()
export class FeedbackUpdateWithWhereUniqueWithoutProductInput {
  @Field(() => FeedbackWhereUniqueInput, { nullable: false })
  @Type(() => FeedbackWhereUniqueInput)
  where!: Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>;

  @Field(() => FeedbackUpdateWithoutProductInput, { nullable: false })
  @Type(() => FeedbackUpdateWithoutProductInput)
  data!: FeedbackUpdateWithoutProductInput;
}
