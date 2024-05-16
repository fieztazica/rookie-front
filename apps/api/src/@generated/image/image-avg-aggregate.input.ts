import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ImageAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
}
