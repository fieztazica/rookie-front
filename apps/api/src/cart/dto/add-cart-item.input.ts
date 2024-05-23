import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class AddCartItemInput {
  @Field()
  key: string;

  @Field(() => Int)
  value: number;
}
