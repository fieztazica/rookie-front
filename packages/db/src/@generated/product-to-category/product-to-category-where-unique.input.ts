import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToCategoryProductIdCategoryIdCompoundUniqueInput } from './product-to-category-product-id-category-id-compound-unique.input';
import { ProductToCategoryWhereInput } from './product-to-category-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CategoryRelationFilter } from '../category/category-relation-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductToCategoryWhereUniqueInput {

    @Field(() => ProductToCategoryProductIdCategoryIdCompoundUniqueInput, {nullable:true})
    productId_categoryId?: ProductToCategoryProductIdCategoryIdCompoundUniqueInput;

    @Field(() => [ProductToCategoryWhereInput], {nullable:true})
    AND?: Array<ProductToCategoryWhereInput>;

    @Field(() => [ProductToCategoryWhereInput], {nullable:true})
    OR?: Array<ProductToCategoryWhereInput>;

    @Field(() => [ProductToCategoryWhereInput], {nullable:true})
    NOT?: Array<ProductToCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    category?: CategoryRelationFilter;

    @Field(() => ProductRelationFilter, {nullable:true})
    @Type(() => ProductRelationFilter)
    product?: ProductRelationFilter;
}
