import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutOrderItemsInput } from '../product/product-create-nested-one-without-order-items.input';

@InputType()
export class OrderItemCreateWithoutOrderInput {

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedOneWithoutOrderItemsInput, {nullable:false})
    @Type(() => ProductCreateNestedOneWithoutOrderItemsInput)
    product!: ProductCreateNestedOneWithoutOrderItemsInput;
}
