import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedbackCreateInput } from './feedback-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFeedbackArgs {
  @Field(() => FeedbackCreateInput, { nullable: false })
  @Type(() => FeedbackCreateInput)
  data!: FeedbackCreateInput;
}
