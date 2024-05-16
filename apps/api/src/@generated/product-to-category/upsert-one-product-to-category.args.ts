import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductToCategoryWhereUniqueInput } from './product-to-category-where-unique.input';
import { Type } from 'class-transformer';
import { ProductToCategoryCreateInput } from './product-to-category-create.input';
import { ProductToCategoryUpdateInput } from './product-to-category-update.input';

@ArgsType()
export class UpsertOneProductToCategoryArgs {

    @Field(() => ProductToCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductToCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductToCategoryWhereUniqueInput, 'productId_categoryId'>;

    @Field(() => ProductToCategoryCreateInput, {nullable:false})
    @Type(() => ProductToCategoryCreateInput)
    create!: ProductToCategoryCreateInput;

    @Field(() => ProductToCategoryUpdateInput, {nullable:false})
    @Type(() => ProductToCategoryUpdateInput)
    update!: ProductToCategoryUpdateInput;
}
