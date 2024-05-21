import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Gender } from '../prisma/gender.enum';
import { Order } from '../order/order.model';
import { Feedback } from '../feedback/feedback.model';
import { CustomerCount } from './customer-count.output';

/**
 * @@deny('read', deleted)
 */
@ObjectType({description:"@@deny('read', deleted)"})
export class Customer {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    phoneNumber!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:true})
    displayName!: string | null;

    @Field(() => Gender, {nullable:true,defaultValue:'UNDEFINED'})
    gender!: keyof typeof Gender | null;

    @Field(() => String, {nullable:true})
    accountId!: string | null;

    /**
     * @omit
     */
    @Field(() => Boolean, {nullable:false,defaultValue:false,description:'@omit'})
    deleted!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Order], {nullable:true})
    orders?: Array<Order>;

    @Field(() => [Feedback], {nullable:true})
    feedback?: Array<Feedback>;

    @Field(() => CustomerCount, {nullable:false})
    _count?: CustomerCount;
}
