import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToAuthorWhereInput } from './product-to-author-where.input';
import { Type } from 'class-transformer';
import { ProductToAuthorOrderByWithAggregationInput } from './product-to-author-order-by-with-aggregation.input';
import { ProductToAuthorScalarFieldEnum } from './product-to-author-scalar-field.enum';
import { ProductToAuthorScalarWhereWithAggregatesInput } from './product-to-author-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductToAuthorCountAggregateInput } from './product-to-author-count-aggregate.input';
import { ProductToAuthorMinAggregateInput } from './product-to-author-min-aggregate.input';
import { ProductToAuthorMaxAggregateInput } from './product-to-author-max-aggregate.input';

@ArgsType()
export class ProductToAuthorGroupByArgs {

    @Field(() => ProductToAuthorWhereInput, {nullable:true})
    @Type(() => ProductToAuthorWhereInput)
    where?: ProductToAuthorWhereInput;

    @Field(() => [ProductToAuthorOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductToAuthorOrderByWithAggregationInput>;

    @Field(() => [ProductToAuthorScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductToAuthorScalarFieldEnum>;

    @Field(() => ProductToAuthorScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductToAuthorScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductToAuthorCountAggregateInput, {nullable:true})
    _count?: ProductToAuthorCountAggregateInput;

    @Field(() => ProductToAuthorMinAggregateInput, {nullable:true})
    _min?: ProductToAuthorMinAggregateInput;

    @Field(() => ProductToAuthorMaxAggregateInput, {nullable:true})
    _max?: ProductToAuthorMaxAggregateInput;
}
