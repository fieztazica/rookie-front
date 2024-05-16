import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublisherCreateWithoutProductsInput } from './publisher-create-without-products.input';
import { Type } from 'class-transformer';
import { PublisherCreateOrConnectWithoutProductsInput } from './publisher-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInput } from './publisher-where-unique.input';

@InputType()
export class PublisherCreateNestedOneWithoutProductsInput {

    @Field(() => PublisherCreateWithoutProductsInput, {nullable:true})
    @Type(() => PublisherCreateWithoutProductsInput)
    create?: PublisherCreateWithoutProductsInput;

    @Field(() => PublisherCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => PublisherCreateOrConnectWithoutProductsInput)
    connectOrCreate?: PublisherCreateOrConnectWithoutProductsInput;

    @Field(() => PublisherWhereUniqueInput, {nullable:true})
    @Type(() => PublisherWhereUniqueInput)
    connect?: Prisma.AtLeast<PublisherWhereUniqueInput, 'id' | 'name' | 'email'>;
}
