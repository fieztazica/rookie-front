import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublisherWhereInput } from './publisher-where.input';
import { Type } from 'class-transformer';
import { PublisherOrderByWithRelationInput } from './publisher-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInput } from './publisher-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PublisherScalarFieldEnum } from './publisher-scalar-field.enum';

@ArgsType()
export class FindFirstPublisherArgs {

    @Field(() => PublisherWhereInput, {nullable:true})
    @Type(() => PublisherWhereInput)
    where?: PublisherWhereInput;

    @Field(() => [PublisherOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PublisherOrderByWithRelationInput>;

    @Field(() => PublisherWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PublisherWhereUniqueInput, 'id' | 'name' | 'email'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PublisherScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PublisherScalarFieldEnum>;
}
