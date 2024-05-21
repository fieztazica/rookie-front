import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToPublisherCreateWithoutProductInput } from './product-to-publisher-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductToPublisherCreateOrConnectWithoutProductInput } from './product-to-publisher-create-or-connect-without-product.input';
import { ProductToPublisherCreateManyProductInputEnvelope } from './product-to-publisher-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductToPublisherWhereUniqueInput } from './product-to-publisher-where-unique.input';

@InputType()
export class ProductToPublisherUncheckedCreateNestedManyWithoutProductInput {

    @Field(() => [ProductToPublisherCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductToPublisherCreateWithoutProductInput)
    create?: Array<ProductToPublisherCreateWithoutProductInput>;

    @Field(() => [ProductToPublisherCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductToPublisherCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductToPublisherCreateOrConnectWithoutProductInput>;

    @Field(() => ProductToPublisherCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductToPublisherCreateManyProductInputEnvelope)
    createMany?: ProductToPublisherCreateManyProductInputEnvelope;

    @Field(() => [ProductToPublisherWhereUniqueInput], {nullable:true})
    @Type(() => ProductToPublisherWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductToPublisherWhereUniqueInput, 'productId_publisherId'>>;
}
