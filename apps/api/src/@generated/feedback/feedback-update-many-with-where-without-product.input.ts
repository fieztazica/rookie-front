import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedbackScalarWhereInput } from './feedback-scalar-where.input';
import { Type } from 'class-transformer';
import { FeedbackUpdateManyMutationInput } from './feedback-update-many-mutation.input';

@InputType()
export class FeedbackUpdateManyWithWhereWithoutProductInput {
  @Field(() => FeedbackScalarWhereInput, { nullable: false })
  @Type(() => FeedbackScalarWhereInput)
  where!: FeedbackScalarWhereInput;

  @Field(() => FeedbackUpdateManyMutationInput, { nullable: false })
  @Type(() => FeedbackUpdateManyMutationInput)
  data!: FeedbackUpdateManyMutationInput;
}
