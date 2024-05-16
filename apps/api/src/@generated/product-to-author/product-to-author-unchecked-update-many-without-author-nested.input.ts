import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToAuthorCreateWithoutAuthorInput } from './product-to-author-create-without-author.input';
import { Type } from 'class-transformer';
import { ProductToAuthorCreateOrConnectWithoutAuthorInput } from './product-to-author-create-or-connect-without-author.input';
import { ProductToAuthorUpsertWithWhereUniqueWithoutAuthorInput } from './product-to-author-upsert-with-where-unique-without-author.input';
import { ProductToAuthorCreateManyAuthorInputEnvelope } from './product-to-author-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductToAuthorWhereUniqueInput } from './product-to-author-where-unique.input';
import { ProductToAuthorUpdateWithWhereUniqueWithoutAuthorInput } from './product-to-author-update-with-where-unique-without-author.input';
import { ProductToAuthorUpdateManyWithWhereWithoutAuthorInput } from './product-to-author-update-many-with-where-without-author.input';
import { ProductToAuthorScalarWhereInput } from './product-to-author-scalar-where.input';

@InputType()
export class ProductToAuthorUncheckedUpdateManyWithoutAuthorNestedInput {

    @Field(() => [ProductToAuthorCreateWithoutAuthorInput], {nullable:true})
    @Type(() => ProductToAuthorCreateWithoutAuthorInput)
    create?: Array<ProductToAuthorCreateWithoutAuthorInput>;

    @Field(() => [ProductToAuthorCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => ProductToAuthorCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<ProductToAuthorCreateOrConnectWithoutAuthorInput>;

    @Field(() => [ProductToAuthorUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => ProductToAuthorUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<ProductToAuthorUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => ProductToAuthorCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => ProductToAuthorCreateManyAuthorInputEnvelope)
    createMany?: ProductToAuthorCreateManyAuthorInputEnvelope;

    @Field(() => [ProductToAuthorWhereUniqueInput], {nullable:true})
    @Type(() => ProductToAuthorWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductToAuthorWhereUniqueInput, 'productId_authorId'>>;

    @Field(() => [ProductToAuthorWhereUniqueInput], {nullable:true})
    @Type(() => ProductToAuthorWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductToAuthorWhereUniqueInput, 'productId_authorId'>>;

    @Field(() => [ProductToAuthorWhereUniqueInput], {nullable:true})
    @Type(() => ProductToAuthorWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductToAuthorWhereUniqueInput, 'productId_authorId'>>;

    @Field(() => [ProductToAuthorWhereUniqueInput], {nullable:true})
    @Type(() => ProductToAuthorWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductToAuthorWhereUniqueInput, 'productId_authorId'>>;

    @Field(() => [ProductToAuthorUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => ProductToAuthorUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<ProductToAuthorUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [ProductToAuthorUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => ProductToAuthorUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<ProductToAuthorUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [ProductToAuthorScalarWhereInput], {nullable:true})
    @Type(() => ProductToAuthorScalarWhereInput)
    deleteMany?: Array<ProductToAuthorScalarWhereInput>;
}
