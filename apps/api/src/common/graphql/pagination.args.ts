import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, { defaultValue: 1, nullable: true })
  @Min(1)
  page: number;

  @Field(() => Int, { defaultValue: 10, nullable: true })
  @Min(1)
  perPage: number;
}
