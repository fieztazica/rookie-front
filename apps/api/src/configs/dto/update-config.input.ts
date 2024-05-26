import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateConfigInput } from './create-config.input';

@InputType()
export class UpdateConfigInput extends PartialType(CreateConfigInput) {
  @Field(() => String)
  key: string;
}
