import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProductToPublisher } from '../product-to-publisher/product-to-publisher.model';
import { PublisherCount } from './publisher-count.output';

/**
 * @@deny('read', deleted)
 */
@ObjectType({description:"@@deny('read', deleted)"})
export class Publisher {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    displayName!: string | null;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => String, {nullable:false})
    website!: string;

    /**
     * @omit
     */
    @Field(() => Boolean, {nullable:false,defaultValue:false,description:'@omit'})
    deleted!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [ProductToPublisher], {nullable:true})
    products?: Array<ProductToPublisher>;

    @Field(() => PublisherCount, {nullable:false})
    _count?: PublisherCount;
}
