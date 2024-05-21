import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductToCategoryWhereUniqueInput } from './product-to-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProductToCategoryUpdateWithoutCategoryInput } from './product-to-category-update-without-category.input';

@InputType()
export class ProductToCategoryUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => ProductToCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductToCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductToCategoryWhereUniqueInput, 'productId_categoryId'>;

    @Field(() => ProductToCategoryUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ProductToCategoryUpdateWithoutCategoryInput)
    data!: ProductToCategoryUpdateWithoutCategoryInput;
}
