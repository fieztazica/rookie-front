import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutImagesInput } from './product-create-without-images.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutImagesInput } from './product-create-or-connect-without-images.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutImagesInput {

    @Field(() => ProductCreateWithoutImagesInput, {nullable:true})
    @Type(() => ProductCreateWithoutImagesInput)
    create?: ProductCreateWithoutImagesInput;

    @Field(() => ProductCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutImagesInput)
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
}
