import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductToCategoryWhereUniqueInput } from './product-to-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProductToCategoryCreateWithoutProductInput } from './product-to-category-create-without-product.input';

@InputType()
export class ProductToCategoryCreateOrConnectWithoutProductInput {

    @Field(() => ProductToCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductToCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductToCategoryWhereUniqueInput, 'productId_categoryId'>;

    @Field(() => ProductToCategoryCreateWithoutProductInput, {nullable:false})
    @Type(() => ProductToCategoryCreateWithoutProductInput)
    create!: ProductToCategoryCreateWithoutProductInput;
}
