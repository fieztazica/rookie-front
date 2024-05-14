import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutOrderItemsInput } from './product-create-without-order-items.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutOrderItemsInput } from './product-create-or-connect-without-order-items.input';
import { ProductUpsertWithoutOrderItemsInput } from './product-upsert-without-order-items.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutOrderItemsInput } from './product-update-to-one-with-where-without-order-items.input';

@InputType()
export class ProductUpdateOneRequiredWithoutOrderItemsNestedInput {

    @Field(() => ProductCreateWithoutOrderItemsInput, {nullable:true})
    @Type(() => ProductCreateWithoutOrderItemsInput)
    create?: ProductCreateWithoutOrderItemsInput;

    @Field(() => ProductCreateOrConnectWithoutOrderItemsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutOrderItemsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput;

    @Field(() => ProductUpsertWithoutOrderItemsInput, {nullable:true})
    @Type(() => ProductUpsertWithoutOrderItemsInput)
    upsert?: ProductUpsertWithoutOrderItemsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutOrderItemsInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutOrderItemsInput)
    update?: ProductUpdateToOneWithWhereWithoutOrderItemsInput;
}
