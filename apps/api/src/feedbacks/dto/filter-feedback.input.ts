import { Field, InputType, Int, registerEnumType } from '@nestjs/graphql';
import { Max, Min, IsOptional } from 'class-validator';

export enum AllowedFeedbacksSortBy {
  OLDEST,
  LATEST,
  ONSALE,
}

registerEnumType(AllowedFeedbacksSortBy, {
  name: 'AllowedFeedbacksSortBy',
});

@InputType()
export class FilterFeedbackInput {
  @Field(() => AllowedFeedbacksSortBy, {
    defaultValue: AllowedFeedbacksSortBy.LATEST,
    nullable: true,
  })
  sortBy: AllowedFeedbacksSortBy;

  @Min(1)
  @Max(5)
  @IsOptional()
  @Field(() => Int, { nullable: true, defaultValue: 5 })
  star: number;
}
