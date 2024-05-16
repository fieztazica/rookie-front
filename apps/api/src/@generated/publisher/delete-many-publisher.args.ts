import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublisherWhereInput } from './publisher-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPublisherArgs {
  @Field(() => PublisherWhereInput, { nullable: true })
  @Type(() => PublisherWhereInput)
  where?: PublisherWhereInput;
}
