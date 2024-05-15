import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';
import { Type } from 'class-transformer';
import { AuthorRelationFilter } from '../author/author-relation-filter.input';

@InputType()
export class ProductToAuthorWhereInput {

    @Field(() => [ProductToAuthorWhereInput], {nullable:true})
    AND?: Array<ProductToAuthorWhereInput>;

    @Field(() => [ProductToAuthorWhereInput], {nullable:true})
    OR?: Array<ProductToAuthorWhereInput>;

    @Field(() => [ProductToAuthorWhereInput], {nullable:true})
    NOT?: Array<ProductToAuthorWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    authorId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProductRelationFilter, {nullable:true})
    @Type(() => ProductRelationFilter)
    product?: ProductRelationFilter;

    @Field(() => AuthorRelationFilter, {nullable:true})
    author?: AuthorRelationFilter;
}
