import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToPublisherWhereInput } from './product-to-publisher-where.input';
import { Type } from 'class-transformer';
import { ProductToPublisherOrderByWithRelationInput } from './product-to-publisher-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductToPublisherWhereUniqueInput } from './product-to-publisher-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductToPublisherCountAggregateInput } from './product-to-publisher-count-aggregate.input';
import { ProductToPublisherMinAggregateInput } from './product-to-publisher-min-aggregate.input';
import { ProductToPublisherMaxAggregateInput } from './product-to-publisher-max-aggregate.input';

@ArgsType()
export class ProductToPublisherAggregateArgs {

    @Field(() => ProductToPublisherWhereInput, {nullable:true})
    @Type(() => ProductToPublisherWhereInput)
    where?: ProductToPublisherWhereInput;

    @Field(() => [ProductToPublisherOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductToPublisherOrderByWithRelationInput>;

    @Field(() => ProductToPublisherWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductToPublisherWhereUniqueInput, 'productId_publisherId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductToPublisherCountAggregateInput, {nullable:true})
    _count?: ProductToPublisherCountAggregateInput;

    @Field(() => ProductToPublisherMinAggregateInput, {nullable:true})
    _min?: ProductToPublisherMinAggregateInput;

    @Field(() => ProductToPublisherMaxAggregateInput, {nullable:true})
    _max?: ProductToPublisherMaxAggregateInput;
}
