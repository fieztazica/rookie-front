import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutOrderItemsInput } from './product-create-without-order-items.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutOrderItemsInput } from './product-create-or-connect-without-order-items.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutOrderItemsInput {

    @Field(() => ProductCreateWithoutOrderItemsInput, {nullable:true})
    @Type(() => ProductCreateWithoutOrderItemsInput)
    create?: ProductCreateWithoutOrderItemsInput;

    @Field(() => ProductCreateOrConnectWithoutOrderItemsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutOrderItemsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;
}
