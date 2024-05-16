import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneFeedbackArgs {
  @Field(() => FeedbackWhereUniqueInput, { nullable: false })
  @Type(() => FeedbackWhereUniqueInput)
  where!: Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>;
}
