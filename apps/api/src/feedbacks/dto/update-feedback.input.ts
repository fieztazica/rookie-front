import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateFeedbackInput } from './create-feedback.input';

@InputType()
export class UpdateFeedbackInput extends PartialType(CreateFeedbackInput) {
  @Field(() => String)
  id: string;
}
