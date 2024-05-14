import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ProductToCategoryScalarWhereInput {

    @Field(() => [ProductToCategoryScalarWhereInput], {nullable:true})
    AND?: Array<ProductToCategoryScalarWhereInput>;

    @Field(() => [ProductToCategoryScalarWhereInput], {nullable:true})
    OR?: Array<ProductToCategoryScalarWhereInput>;

    @Field(() => [ProductToCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<ProductToCategoryScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
