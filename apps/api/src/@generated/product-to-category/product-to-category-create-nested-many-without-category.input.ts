import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToCategoryCreateWithoutCategoryInput } from './product-to-category-create-without-category.input';
import { Type } from 'class-transformer';
import { ProductToCategoryCreateOrConnectWithoutCategoryInput } from './product-to-category-create-or-connect-without-category.input';
import { ProductToCategoryCreateManyCategoryInputEnvelope } from './product-to-category-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductToCategoryWhereUniqueInput } from './product-to-category-where-unique.input';

@InputType()
export class ProductToCategoryCreateNestedManyWithoutCategoryInput {

    @Field(() => [ProductToCategoryCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ProductToCategoryCreateWithoutCategoryInput)
    create?: Array<ProductToCategoryCreateWithoutCategoryInput>;

    @Field(() => [ProductToCategoryCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ProductToCategoryCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ProductToCategoryCreateOrConnectWithoutCategoryInput>;

    @Field(() => ProductToCategoryCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ProductToCategoryCreateManyCategoryInputEnvelope)
    createMany?: ProductToCategoryCreateManyCategoryInputEnvelope;

    @Field(() => [ProductToCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductToCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductToCategoryWhereUniqueInput, 'productId_categoryId'>>;
}
