import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToCategoryCreateWithoutProductInput } from './product-to-category-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductToCategoryCreateOrConnectWithoutProductInput } from './product-to-category-create-or-connect-without-product.input';
import { ProductToCategoryCreateManyProductInputEnvelope } from './product-to-category-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductToCategoryWhereUniqueInput } from './product-to-category-where-unique.input';

@InputType()
export class ProductToCategoryCreateNestedManyWithoutProductInput {

    @Field(() => [ProductToCategoryCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductToCategoryCreateWithoutProductInput)
    create?: Array<ProductToCategoryCreateWithoutProductInput>;

    @Field(() => [ProductToCategoryCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductToCategoryCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductToCategoryCreateOrConnectWithoutProductInput>;

    @Field(() => ProductToCategoryCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductToCategoryCreateManyProductInputEnvelope)
    createMany?: ProductToCategoryCreateManyProductInputEnvelope;

    @Field(() => [ProductToCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductToCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductToCategoryWhereUniqueInput, 'productId_categoryId'>>;
}
