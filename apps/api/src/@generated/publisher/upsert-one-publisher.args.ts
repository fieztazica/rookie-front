import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInput } from './publisher-where-unique.input';
import { Type } from 'class-transformer';
import { PublisherCreateInput } from './publisher-create.input';
import { PublisherUpdateInput } from './publisher-update.input';

@ArgsType()
export class UpsertOnePublisherArgs {

    @Field(() => PublisherWhereUniqueInput, {nullable:false})
    @Type(() => PublisherWhereUniqueInput)
    where!: Prisma.AtLeast<PublisherWhereUniqueInput, 'id' | 'name' | 'email'>;

    @Field(() => PublisherCreateInput, {nullable:false})
    @Type(() => PublisherCreateInput)
    create!: PublisherCreateInput;

    @Field(() => PublisherUpdateInput, {nullable:false})
    @Type(() => PublisherUpdateInput)
    update!: PublisherUpdateInput;
}
