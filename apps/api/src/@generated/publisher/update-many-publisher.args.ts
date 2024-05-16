import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PublisherUpdateManyMutationInput } from './publisher-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PublisherWhereInput } from './publisher-where.input';

@ArgsType()
export class UpdateManyPublisherArgs {
  @Field(() => PublisherUpdateManyMutationInput, { nullable: false })
  @Type(() => PublisherUpdateManyMutationInput)
  data!: PublisherUpdateManyMutationInput;

  @Field(() => PublisherWhereInput, { nullable: true })
  @Type(() => PublisherWhereInput)
  where?: PublisherWhereInput;
}
