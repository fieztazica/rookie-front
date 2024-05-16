import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublisherUpdateInput } from './publisher-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInput } from './publisher-where-unique.input';

@ArgsType()
export class UpdateOnePublisherArgs {
  @Field(() => PublisherUpdateInput, { nullable: false })
  @Type(() => PublisherUpdateInput)
  data!: PublisherUpdateInput;

  @Field(() => PublisherWhereUniqueInput, { nullable: false })
  @Type(() => PublisherWhereUniqueInput)
  where!: Prisma.AtLeast<PublisherWhereUniqueInput, 'id' | 'name' | 'email'>;
}
