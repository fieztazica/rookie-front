import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductToCategoryUpdateInput } from './product-to-category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProductToCategoryWhereUniqueInput } from './product-to-category-where-unique.input';

@ArgsType()
export class UpdateOneProductToCategoryArgs {

    @Field(() => ProductToCategoryUpdateInput, {nullable:false})
    @Type(() => ProductToCategoryUpdateInput)
    data!: ProductToCategoryUpdateInput;

    @Field(() => ProductToCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductToCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductToCategoryWhereUniqueInput, 'productId_categoryId'>;
}
