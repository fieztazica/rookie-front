import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PublisherMaxAggregate {

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
}
