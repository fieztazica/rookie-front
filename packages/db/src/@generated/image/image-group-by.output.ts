import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ImageCountAggregate } from './image-count-aggregate.output';
import { ImageAvgAggregate } from './image-avg-aggregate.output';
import { ImageSumAggregate } from './image-sum-aggregate.output';
import { ImageMinAggregate } from './image-min-aggregate.output';
import { ImageMaxAggregate } from './image-max-aggregate.output';

@ObjectType()
export class ImageGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:true})
    alt?: string;

    @Field(() => Boolean, {nullable:false})
    isThumbnail!: boolean;

    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ImageCountAggregate, {nullable:true})
    _count?: ImageCountAggregate;

    @Field(() => ImageAvgAggregate, {nullable:true})
    _avg?: ImageAvgAggregate;

    @Field(() => ImageSumAggregate, {nullable:true})
    _sum?: ImageSumAggregate;

    @Field(() => ImageMinAggregate, {nullable:true})
    _min?: ImageMinAggregate;

    @Field(() => ImageMaxAggregate, {nullable:true})
    _max?: ImageMaxAggregate;
}
