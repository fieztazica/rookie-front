import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToPublisherCreateNestedManyWithoutPublisherInput } from '../product-to-publisher/product-to-publisher-create-nested-many-without-publisher.input';
import { Type } from 'class-transformer';

@InputType()
export class PublisherCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    displayName?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => String, {nullable:false})
    website!: string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductToPublisherCreateNestedManyWithoutPublisherInput, {nullable:true})
    @Type(() => ProductToPublisherCreateNestedManyWithoutPublisherInput)
    productToPublishers?: ProductToPublisherCreateNestedManyWithoutPublisherInput;
}
