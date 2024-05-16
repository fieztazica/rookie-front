import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInput } from './publisher-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePublisherArgs {

    @Field(() => PublisherWhereUniqueInput, {nullable:false})
    @Type(() => PublisherWhereUniqueInput)
    where!: Prisma.AtLeast<PublisherWhereUniqueInput, 'id' | 'name' | 'email'>;
}
