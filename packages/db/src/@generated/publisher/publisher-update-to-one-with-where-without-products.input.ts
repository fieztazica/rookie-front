import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublisherWhereInput } from './publisher-where.input';
import { Type } from 'class-transformer';
import { PublisherUpdateWithoutProductsInput } from './publisher-update-without-products.input';

@InputType()
export class PublisherUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => PublisherWhereInput, {nullable:true})
    @Type(() => PublisherWhereInput)
    where?: PublisherWhereInput;

    @Field(() => PublisherUpdateWithoutProductsInput, {nullable:false})
    @Type(() => PublisherUpdateWithoutProductsInput)
    data!: PublisherUpdateWithoutProductsInput;
}
