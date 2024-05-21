import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PublisherCountAggregate } from './publisher-count-aggregate.output';
import { PublisherMinAggregate } from './publisher-min-aggregate.output';
import { PublisherMaxAggregate } from './publisher-max-aggregate.output';

@ObjectType()
export class AggregatePublisher {

    @Field(() => PublisherCountAggregate, {nullable:true})
    _count?: PublisherCountAggregate;

    @Field(() => PublisherMinAggregate, {nullable:true})
    _min?: PublisherMinAggregate;

    @Field(() => PublisherMaxAggregate, {nullable:true})
    _max?: PublisherMaxAggregate;
}
