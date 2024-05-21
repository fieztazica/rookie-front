import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProductToPublisherUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    productId?: string;

    @Field(() => String, {nullable:true})
    publisherId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
