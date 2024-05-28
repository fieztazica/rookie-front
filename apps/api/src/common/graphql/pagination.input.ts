import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class PaginationInput {
  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => Int, { nullable: true })
  perPage?: number;
}
