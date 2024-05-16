import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToCategoryWhereInput } from './product-to-category-where.input';
import { Type } from 'class-transformer';
import { ProductToCategoryOrderByWithRelationInput } from './product-to-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductToCategoryWhereUniqueInput } from './product-to-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductToCategoryScalarFieldEnum } from './product-to-category-scalar-field.enum';

@ArgsType()
export class FindFirstProductToCategoryArgs {

    @Field(() => ProductToCategoryWhereInput, {nullable:true})
    @Type(() => ProductToCategoryWhereInput)
    where?: ProductToCategoryWhereInput;

    @Field(() => [ProductToCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductToCategoryOrderByWithRelationInput>;

    @Field(() => ProductToCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductToCategoryWhereUniqueInput, 'productId_categoryId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductToCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductToCategoryScalarFieldEnum>;
}
