import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductToCategoryWhereUniqueInput } from './product-to-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProductToCategoryUpdateWithoutProductInput } from './product-to-category-update-without-product.input';
import { ProductToCategoryCreateWithoutProductInput } from './product-to-category-create-without-product.input';

@InputType()
export class ProductToCategoryUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => ProductToCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductToCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductToCategoryWhereUniqueInput, 'productId_categoryId'>;

    @Field(() => ProductToCategoryUpdateWithoutProductInput, {nullable:false})
    @Type(() => ProductToCategoryUpdateWithoutProductInput)
    update!: ProductToCategoryUpdateWithoutProductInput;

    @Field(() => ProductToCategoryCreateWithoutProductInput, {nullable:false})
    @Type(() => ProductToCategoryCreateWithoutProductInput)
    create!: ProductToCategoryCreateWithoutProductInput;
}
