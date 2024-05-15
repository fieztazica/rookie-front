import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutProductToPublishersInput } from './product-create-without-product-to-publishers.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutProductToPublishersInput } from './product-create-or-connect-without-product-to-publishers.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutProductToPublishersInput {

    @Field(() => ProductCreateWithoutProductToPublishersInput, {nullable:true})
    @Type(() => ProductCreateWithoutProductToPublishersInput)
    create?: ProductCreateWithoutProductToPublishersInput;

    @Field(() => ProductCreateOrConnectWithoutProductToPublishersInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutProductToPublishersInput)
    connectOrCreate?: ProductCreateOrConnectWithoutProductToPublishersInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
}
