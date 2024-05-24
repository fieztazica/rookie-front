import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CartItemInput {
  @Field()
  key: string;

  @Field(() => Int)
  value: number;
}
