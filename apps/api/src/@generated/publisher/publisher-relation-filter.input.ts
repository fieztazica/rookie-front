import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublisherWhereInput } from './publisher-where.input';

@InputType()
export class PublisherRelationFilter {
  @Field(() => PublisherWhereInput, { nullable: true })
  is?: PublisherWhereInput;

  @Field(() => PublisherWhereInput, { nullable: true })
  isNot?: PublisherWhereInput;
}
