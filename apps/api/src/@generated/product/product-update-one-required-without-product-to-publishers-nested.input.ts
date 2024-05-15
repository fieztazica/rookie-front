import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutProductToPublishersInput } from './product-create-without-product-to-publishers.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutProductToPublishersInput } from './product-create-or-connect-without-product-to-publishers.input';
import { ProductUpsertWithoutProductToPublishersInput } from './product-upsert-without-product-to-publishers.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutProductToPublishersInput } from './product-update-to-one-with-where-without-product-to-publishers.input';

@InputType()
export class ProductUpdateOneRequiredWithoutProductToPublishersNestedInput {

    @Field(() => ProductCreateWithoutProductToPublishersInput, {nullable:true})
    @Type(() => ProductCreateWithoutProductToPublishersInput)
    create?: ProductCreateWithoutProductToPublishersInput;

    @Field(() => ProductCreateOrConnectWithoutProductToPublishersInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutProductToPublishersInput)
    connectOrCreate?: ProductCreateOrConnectWithoutProductToPublishersInput;

    @Field(() => ProductUpsertWithoutProductToPublishersInput, {nullable:true})
    @Type(() => ProductUpsertWithoutProductToPublishersInput)
    upsert?: ProductUpsertWithoutProductToPublishersInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutProductToPublishersInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutProductToPublishersInput)
    update?: ProductUpdateToOneWithWhereWithoutProductToPublishersInput;
}
