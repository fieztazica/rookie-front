import { CreatePublisherInput } from './create-publisher.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePublisherInput extends PartialType(CreatePublisherInput) {
  @Field(() => String)
  id: string;
}
