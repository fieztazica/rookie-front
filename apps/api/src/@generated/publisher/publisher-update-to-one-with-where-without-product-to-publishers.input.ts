import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublisherWhereInput } from './publisher-where.input';
import { Type } from 'class-transformer';
import { PublisherUpdateWithoutProductToPublishersInput } from './publisher-update-without-product-to-publishers.input';

@InputType()
export class PublisherUpdateToOneWithWhereWithoutProductToPublishersInput {
  @Field(() => PublisherWhereInput, { nullable: true })
  @Type(() => PublisherWhereInput)
  where?: PublisherWhereInput;

  @Field(() => PublisherUpdateWithoutProductToPublishersInput, {
    nullable: false,
  })
  @Type(() => PublisherUpdateWithoutProductToPublishersInput)
  data!: PublisherUpdateWithoutProductToPublishersInput;
}
