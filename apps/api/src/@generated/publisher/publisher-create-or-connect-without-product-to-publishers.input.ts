import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInput } from './publisher-where-unique.input';
import { Type } from 'class-transformer';
import { PublisherCreateWithoutProductToPublishersInput } from './publisher-create-without-product-to-publishers.input';

@InputType()
export class PublisherCreateOrConnectWithoutProductToPublishersInput {

    @Field(() => PublisherWhereUniqueInput, {nullable:false})
    @Type(() => PublisherWhereUniqueInput)
    where!: Prisma.AtLeast<PublisherWhereUniqueInput, 'id' | 'name' | 'email'>;

    @Field(() => PublisherCreateWithoutProductToPublishersInput, {nullable:false})
    @Type(() => PublisherCreateWithoutProductToPublishersInput)
    create!: PublisherCreateWithoutProductToPublishersInput;
}
