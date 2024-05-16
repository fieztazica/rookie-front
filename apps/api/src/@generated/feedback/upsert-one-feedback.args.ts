import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';
import { Type } from 'class-transformer';
import { FeedbackCreateInput } from './feedback-create.input';
import { FeedbackUpdateInput } from './feedback-update.input';

@ArgsType()
export class UpsertOneFeedbackArgs {
  @Field(() => FeedbackWhereUniqueInput, { nullable: false })
  @Type(() => FeedbackWhereUniqueInput)
  where!: Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>;

  @Field(() => FeedbackCreateInput, { nullable: false })
  @Type(() => FeedbackCreateInput)
  create!: FeedbackCreateInput;

  @Field(() => FeedbackUpdateInput, { nullable: false })
  @Type(() => FeedbackUpdateInput)
  update!: FeedbackUpdateInput;
}
