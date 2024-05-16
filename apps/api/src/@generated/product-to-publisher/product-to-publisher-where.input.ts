import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';
import { Type } from 'class-transformer';
import { PublisherRelationFilter } from '../publisher/publisher-relation-filter.input';

@InputType()
export class ProductToPublisherWhereInput {

    @Field(() => [ProductToPublisherWhereInput], {nullable:true})
    AND?: Array<ProductToPublisherWhereInput>;

    @Field(() => [ProductToPublisherWhereInput], {nullable:true})
    OR?: Array<ProductToPublisherWhereInput>;

    @Field(() => [ProductToPublisherWhereInput], {nullable:true})
    NOT?: Array<ProductToPublisherWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    publisherId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProductRelationFilter, {nullable:true})
    @Type(() => ProductRelationFilter)
    product?: ProductRelationFilter;

    @Field(() => PublisherRelationFilter, {nullable:true})
    publisher?: PublisherRelationFilter;
}
