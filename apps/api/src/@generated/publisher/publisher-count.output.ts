import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PublisherCount {

    @Field(() => Int, {nullable:false})
    products?: number;
}
