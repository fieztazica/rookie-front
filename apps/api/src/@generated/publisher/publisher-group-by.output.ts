import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PublisherCountAggregate } from './publisher-count-aggregate.output';
import { PublisherMinAggregate } from './publisher-min-aggregate.output';
import { PublisherMaxAggregate } from './publisher-max-aggregate.output';

@ObjectType()
export class PublisherGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  displayName?: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  phoneNumber!: string;

  @Field(() => String, { nullable: false })
  website!: string;

  @Field(() => Boolean, { nullable: false })
  deleted!: boolean;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => PublisherCountAggregate, { nullable: true })
  _count?: PublisherCountAggregate;

  @Field(() => PublisherMinAggregate, { nullable: true })
  _min?: PublisherMinAggregate;

  @Field(() => PublisherMaxAggregate, { nullable: true })
  _max?: PublisherMaxAggregate;
}
