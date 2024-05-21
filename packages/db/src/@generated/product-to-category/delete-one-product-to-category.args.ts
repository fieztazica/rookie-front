import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductToCategoryWhereUniqueInput } from './product-to-category-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneProductToCategoryArgs {

    @Field(() => ProductToCategoryWhereUniqueInput, {nullable:false})
    @Type(() => ProductToCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<ProductToCategoryWhereUniqueInput, 'productId_categoryId'>;
}
