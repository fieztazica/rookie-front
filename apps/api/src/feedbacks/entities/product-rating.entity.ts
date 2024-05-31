import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class StarRatings {
  @Field(() => Int)
  five: number;

  @Field(() => Int)
  four: number;

  @Field(() => Int)
  three: number;

  @Field(() => Int)
  two: number;

  @Field(() => Int)
  one: number;
}

@ObjectType()
export class ProductRating {
  @Field(() => Int)
  totalRatings: number;

  @Field(() => Float)
  averageRatings: number;

  @Field(() => StarRatings)
  ratings: StarRatings;
}
