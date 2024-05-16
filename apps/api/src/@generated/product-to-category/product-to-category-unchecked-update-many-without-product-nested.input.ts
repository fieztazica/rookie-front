import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToCategoryCreateWithoutProductInput } from './product-to-category-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductToCategoryCreateOrConnectWithoutProductInput } from './product-to-category-create-or-connect-without-product.input';
import { ProductToCategoryUpsertWithWhereUniqueWithoutProductInput } from './product-to-category-upsert-with-where-unique-without-product.input';
import { ProductToCategoryCreateManyProductInputEnvelope } from './product-to-category-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductToCategoryWhereUniqueInput } from './product-to-category-where-unique.input';
import { ProductToCategoryUpdateWithWhereUniqueWithoutProductInput } from './product-to-category-update-with-where-unique-without-product.input';
import { ProductToCategoryUpdateManyWithWhereWithoutProductInput } from './product-to-category-update-many-with-where-without-product.input';
import { ProductToCategoryScalarWhereInput } from './product-to-category-scalar-where.input';

@InputType()
export class ProductToCategoryUncheckedUpdateManyWithoutProductNestedInput {

    @Field(() => [ProductToCategoryCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductToCategoryCreateWithoutProductInput)
    create?: Array<ProductToCategoryCreateWithoutProductInput>;

    @Field(() => [ProductToCategoryCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductToCategoryCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductToCategoryCreateOrConnectWithoutProductInput>;

    @Field(() => [ProductToCategoryUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductToCategoryUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<ProductToCategoryUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => ProductToCategoryCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductToCategoryCreateManyProductInputEnvelope)
    createMany?: ProductToCategoryCreateManyProductInputEnvelope;

    @Field(() => [ProductToCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductToCategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductToCategoryWhereUniqueInput, 'productId_categoryId'>>;

    @Field(() => [ProductToCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductToCategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductToCategoryWhereUniqueInput, 'productId_categoryId'>>;

    @Field(() => [ProductToCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductToCategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductToCategoryWhereUniqueInput, 'productId_categoryId'>>;

    @Field(() => [ProductToCategoryWhereUniqueInput], {nullable:true})
    @Type(() => ProductToCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductToCategoryWhereUniqueInput, 'productId_categoryId'>>;

    @Field(() => [ProductToCategoryUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductToCategoryUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<ProductToCategoryUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [ProductToCategoryUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => ProductToCategoryUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<ProductToCategoryUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [ProductToCategoryScalarWhereInput], {nullable:true})
    @Type(() => ProductToCategoryScalarWhereInput)
    deleteMany?: Array<ProductToCategoryScalarWhereInput>;
}
