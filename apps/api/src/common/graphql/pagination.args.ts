import { ArgsType, Field, Int } from '@nestjs/graphql';

export interface IPaginationArgs {
  page?: number;
  perPage?: number;
}

@ArgsType()
export class PaginationArgs implements IPaginationArgs {
  @Field(() => Int, { nullable: true })
  page?: number;

  @Field(() => Int, { nullable: true })
  perPage?: number;
}
