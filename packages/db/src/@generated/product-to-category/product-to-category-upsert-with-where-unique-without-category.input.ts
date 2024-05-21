import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductToCategoryWhereUniqueInput } from './product-to-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProductToCategoryUpdateWithoutCategoryInput } from './product-to-category-update-without-category.input';
import { ProductToCategoryCreateWithoutCategoryInput } from './product-to-category-create-without-category.input';

@InputType()
export class ProductToCategoryUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => ProductToCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductToCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductToCategoryWhereUniqueInput, 'productId_categoryId'>;

    @Field(() => ProductToCategoryUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductToCategoryUpdateWithoutCategoryInput)
    update!: ProductToCategoryUpdateWithoutCategoryInput;

    @Field(() => ProductToCategoryCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductToCategoryCreateWithoutCategoryInput)
    create!: ProductToCategoryCreateWithoutCategoryInput;
}
