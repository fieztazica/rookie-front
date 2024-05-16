import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FeedbackSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  rating?: true;
}
