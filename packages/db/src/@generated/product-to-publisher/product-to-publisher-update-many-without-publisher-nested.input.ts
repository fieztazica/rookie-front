import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToPublisherCreateWithoutPublisherInput } from './product-to-publisher-create-without-publisher.input';
import { Type } from 'class-transformer';
import { ProductToPublisherCreateOrConnectWithoutPublisherInput } from './product-to-publisher-create-or-connect-without-publisher.input';
import { ProductToPublisherUpsertWithWhereUniqueWithoutPublisherInput } from './product-to-publisher-upsert-with-where-unique-without-publisher.input';
import { ProductToPublisherCreateManyPublisherInputEnvelope } from './product-to-publisher-create-many-publisher-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductToPublisherWhereUniqueInput } from './product-to-publisher-where-unique.input';
import { ProductToPublisherUpdateWithWhereUniqueWithoutPublisherInput } from './product-to-publisher-update-with-where-unique-without-publisher.input';
import { ProductToPublisherUpdateManyWithWhereWithoutPublisherInput } from './product-to-publisher-update-many-with-where-without-publisher.input';
import { ProductToPublisherScalarWhereInput } from './product-to-publisher-scalar-where.input';

@InputType()
export class ProductToPublisherUpdateManyWithoutPublisherNestedInput {

    @Field(() => [ProductToPublisherCreateWithoutPublisherInput], {nullable:true})
    @Type(() => ProductToPublisherCreateWithoutPublisherInput)
    create?: Array<ProductToPublisherCreateWithoutPublisherInput>;

    @Field(() => [ProductToPublisherCreateOrConnectWithoutPublisherInput], {nullable:true})
    @Type(() => ProductToPublisherCreateOrConnectWithoutPublisherInput)
    connectOrCreate?: Array<ProductToPublisherCreateOrConnectWithoutPublisherInput>;

    @Field(() => [ProductToPublisherUpsertWithWhereUniqueWithoutPublisherInput], {nullable:true})
    @Type(() => ProductToPublisherUpsertWithWhereUniqueWithoutPublisherInput)
    upsert?: Array<ProductToPublisherUpsertWithWhereUniqueWithoutPublisherInput>;

    @Field(() => ProductToPublisherCreateManyPublisherInputEnvelope, {nullable:true})
    @Type(() => ProductToPublisherCreateManyPublisherInputEnvelope)
    createMany?: ProductToPublisherCreateManyPublisherInputEnvelope;

    @Field(() => [ProductToPublisherWhereUniqueInput], {nullable:true})
    @Type(() => ProductToPublisherWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductToPublisherWhereUniqueInput, 'productId_publisherId'>>;

    @Field(() => [ProductToPublisherWhereUniqueInput], {nullable:true})
    @Type(() => ProductToPublisherWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductToPublisherWhereUniqueInput, 'productId_publisherId'>>;

    @Field(() => [ProductToPublisherWhereUniqueInput], {nullable:true})
    @Type(() => ProductToPublisherWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductToPublisherWhereUniqueInput, 'productId_publisherId'>>;

    @Field(() => [ProductToPublisherWhereUniqueInput], {nullable:true})
    @Type(() => ProductToPublisherWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductToPublisherWhereUniqueInput, 'productId_publisherId'>>;

    @Field(() => [ProductToPublisherUpdateWithWhereUniqueWithoutPublisherInput], {nullable:true})
    @Type(() => ProductToPublisherUpdateWithWhereUniqueWithoutPublisherInput)
    update?: Array<ProductToPublisherUpdateWithWhereUniqueWithoutPublisherInput>;

    @Field(() => [ProductToPublisherUpdateManyWithWhereWithoutPublisherInput], {nullable:true})
    @Type(() => ProductToPublisherUpdateManyWithWhereWithoutPublisherInput)
    updateMany?: Array<ProductToPublisherUpdateManyWithWhereWithoutPublisherInput>;

    @Field(() => [ProductToPublisherScalarWhereInput], {nullable:true})
    @Type(() => ProductToPublisherScalarWhereInput)
    deleteMany?: Array<ProductToPublisherScalarWhereInput>;
}
