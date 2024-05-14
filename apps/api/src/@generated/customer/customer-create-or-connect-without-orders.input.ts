import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { CustomerCreateWithoutOrdersInput } from './customer-create-without-orders.input';

@InputType()
export class CustomerCreateOrConnectWithoutOrdersInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    @Type(() => CustomerWhereUniqueInput)
    where!: Prisma.AtLeast<CustomerWhereUniqueInput, 'id' | 'username' | 'email' | 'phoneNumber'>;

    @Field(() => CustomerCreateWithoutOrdersInput, {nullable:false})
    @Type(() => CustomerCreateWithoutOrdersInput)
    create!: CustomerCreateWithoutOrdersInput;
}
