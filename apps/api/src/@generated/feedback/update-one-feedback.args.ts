import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedbackUpdateInput } from './feedback-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';

@ArgsType()
export class UpdateOneFeedbackArgs {
  @Field(() => FeedbackUpdateInput, { nullable: false })
  @Type(() => FeedbackUpdateInput)
  data!: FeedbackUpdateInput;

  @Field(() => FeedbackWhereUniqueInput, { nullable: false })
  @Type(() => FeedbackWhereUniqueInput)
  where!: Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>;
}
