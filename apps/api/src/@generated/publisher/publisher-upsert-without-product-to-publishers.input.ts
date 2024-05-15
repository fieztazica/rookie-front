import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublisherUpdateWithoutProductToPublishersInput } from './publisher-update-without-product-to-publishers.input';
import { Type } from 'class-transformer';
import { PublisherCreateWithoutProductToPublishersInput } from './publisher-create-without-product-to-publishers.input';
import { PublisherWhereInput } from './publisher-where.input';

@InputType()
export class PublisherUpsertWithoutProductToPublishersInput {

    @Field(() => PublisherUpdateWithoutProductToPublishersInput, {nullable:false})
    @Type(() => PublisherUpdateWithoutProductToPublishersInput)
    update!: PublisherUpdateWithoutProductToPublishersInput;

    @Field(() => PublisherCreateWithoutProductToPublishersInput, {nullable:false})
    @Type(() => PublisherCreateWithoutProductToPublishersInput)
    create!: PublisherCreateWithoutProductToPublishersInput;

    @Field(() => PublisherWhereInput, {nullable:true})
    @Type(() => PublisherWhereInput)
    where?: PublisherWhereInput;
}
