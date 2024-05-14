import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductToCategoryCountAggregate } from './product-to-category-count-aggregate.output';
import { ProductToCategoryMinAggregate } from './product-to-category-min-aggregate.output';
import { ProductToCategoryMaxAggregate } from './product-to-category-max-aggregate.output';

@ObjectType()
export class AggregateProductToCategory {

    @Field(() => ProductToCategoryCountAggregate, {nullable:true})
    _count?: ProductToCategoryCountAggregate;

    @Field(() => ProductToCategoryMinAggregate, {nullable:true})
    _min?: ProductToCategoryMinAggregate;

    @Field(() => ProductToCategoryMaxAggregate, {nullable:true})
    _max?: ProductToCategoryMaxAggregate;
}
