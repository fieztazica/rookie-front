import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutPublishersInput } from './product-create-without-publishers.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutPublishersInput } from './product-create-or-connect-without-publishers.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutPublishersInput {

    @Field(() => ProductCreateWithoutPublishersInput, {nullable:true})
    @Type(() => ProductCreateWithoutPublishersInput)
    create?: ProductCreateWithoutPublishersInput;

    @Field(() => ProductCreateOrConnectWithoutPublishersInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutPublishersInput)
    connectOrCreate?: ProductCreateOrConnectWithoutPublishersInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
}
