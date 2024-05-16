import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ImageMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  productId?: true;

  @Field(() => Boolean, { nullable: true })
  url?: true;

  @Field(() => Boolean, { nullable: true })
  alt?: true;

  @Field(() => Boolean, { nullable: true })
  isThumbnail?: true;

  @Field(() => Boolean, { nullable: true })
  deleted?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}
