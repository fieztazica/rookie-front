import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublisherWhereInput } from './publisher-where.input';
import { Type } from 'class-transformer';
import { PublisherOrderByWithRelationInput } from './publisher-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInput } from './publisher-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PublisherCountAggregateInput } from './publisher-count-aggregate.input';
import { PublisherMinAggregateInput } from './publisher-min-aggregate.input';
import { PublisherMaxAggregateInput } from './publisher-max-aggregate.input';

@ArgsType()
export class PublisherAggregateArgs {

    @Field(() => PublisherWhereInput, {nullable:true})
    @Type(() => PublisherWhereInput)
    where?: PublisherWhereInput;

    @Field(() => [PublisherOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PublisherOrderByWithRelationInput>;

    @Field(() => PublisherWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PublisherWhereUniqueInput, 'id' | 'name' | 'email'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PublisherCountAggregateInput, {nullable:true})
    _count?: PublisherCountAggregateInput;

    @Field(() => PublisherMinAggregateInput, {nullable:true})
    _min?: PublisherMinAggregateInput;

    @Field(() => PublisherMaxAggregateInput, {nullable:true})
    _max?: PublisherMaxAggregateInput;
}
