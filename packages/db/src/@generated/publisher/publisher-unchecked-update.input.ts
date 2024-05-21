import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToPublisherUncheckedUpdateManyWithoutPublisherNestedInput } from '../product-to-publisher/product-to-publisher-unchecked-update-many-without-publisher-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class PublisherUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductToPublisherUncheckedUpdateManyWithoutPublisherNestedInput, {nullable:true})
    @Type(() => ProductToPublisherUncheckedUpdateManyWithoutPublisherNestedInput)
    products?: ProductToPublisherUncheckedUpdateManyWithoutPublisherNestedInput;
}
