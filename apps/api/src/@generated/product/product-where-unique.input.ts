import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductToCategoryListRelationFilter } from '../product-to-category/product-to-category-list-relation-filter.input';
import { OrderItemListRelationFilter } from '../order-item/order-item-list-relation-filter.input';
import { FeedbackListRelationFilter } from '../feedback/feedback-list-relation-filter.input';
import { ImageListRelationFilter } from '../image/image-list-relation-filter.input';

@InputType()
export class ProductWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [ProductWhereInput], {nullable:true})
    @Type(() => ProductWhereInput)
    AND?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    @Type(() => ProductWhereInput)
    OR?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    @Type(() => ProductWhereInput)
    NOT?: Array<ProductWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    displayName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    price?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    salePrice?: DecimalFilter;

    @Field(() => StringFilter, {nullable:true})
    accountId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    deleted?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProductToCategoryListRelationFilter, {nullable:true})
    @Type(() => ProductToCategoryListRelationFilter)
    categories?: ProductToCategoryListRelationFilter;

    @Field(() => OrderItemListRelationFilter, {nullable:true})
    @Type(() => OrderItemListRelationFilter)
    orderItems?: OrderItemListRelationFilter;

    @Field(() => FeedbackListRelationFilter, {nullable:true})
    @Type(() => FeedbackListRelationFilter)
    feedbacks?: FeedbackListRelationFilter;

    @Field(() => ImageListRelationFilter, {nullable:true})
    @Type(() => ImageListRelationFilter)
    images?: ImageListRelationFilter;
}
