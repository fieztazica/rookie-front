import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateWithoutProductInput } from './image-create-without-product.input';
import { Type } from 'class-transformer';
import { ImageCreateOrConnectWithoutProductInput } from './image-create-or-connect-without-product.input';
import { ImageCreateManyProductInputEnvelope } from './image-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@InputType()
export class ImageCreateNestedManyWithoutProductInput {

    @Field(() => [ImageCreateWithoutProductInput], {nullable:true})
    @Type(() => ImageCreateWithoutProductInput)
    create?: Array<ImageCreateWithoutProductInput>;

    @Field(() => [ImageCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ImageCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ImageCreateOrConnectWithoutProductInput>;

    @Field(() => ImageCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ImageCreateManyProductInputEnvelope)
    createMany?: ImageCreateManyProductInputEnvelope;

    @Field(() => [ImageWhereUniqueInput], {nullable:true})
    @Type(() => ImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ImageWhereUniqueInput, 'id_productId'>>;
}
