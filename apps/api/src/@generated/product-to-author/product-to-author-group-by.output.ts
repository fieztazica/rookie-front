import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProductToAuthorCountAggregate } from './product-to-author-count-aggregate.output';
import { ProductToAuthorMinAggregate } from './product-to-author-min-aggregate.output';
import { ProductToAuthorMaxAggregate } from './product-to-author-max-aggregate.output';

@ObjectType()
export class ProductToAuthorGroupBy {

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ProductToAuthorCountAggregate, {nullable:true})
    _count?: ProductToAuthorCountAggregate;

    @Field(() => ProductToAuthorMinAggregate, {nullable:true})
    _min?: ProductToAuthorMinAggregate;

    @Field(() => ProductToAuthorMaxAggregate, {nullable:true})
    _max?: ProductToAuthorMaxAggregate;
}
