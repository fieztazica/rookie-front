import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublisherCreateWithoutProductToPublishersInput } from './publisher-create-without-product-to-publishers.input';
import { Type } from 'class-transformer';
import { PublisherCreateOrConnectWithoutProductToPublishersInput } from './publisher-create-or-connect-without-product-to-publishers.input';
import { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInput } from './publisher-where-unique.input';

@InputType()
export class PublisherCreateNestedOneWithoutProductToPublishersInput {
  @Field(() => PublisherCreateWithoutProductToPublishersInput, {
    nullable: true,
  })
  @Type(() => PublisherCreateWithoutProductToPublishersInput)
  create?: PublisherCreateWithoutProductToPublishersInput;

  @Field(() => PublisherCreateOrConnectWithoutProductToPublishersInput, {
    nullable: true,
  })
  @Type(() => PublisherCreateOrConnectWithoutProductToPublishersInput)
  connectOrCreate?: PublisherCreateOrConnectWithoutProductToPublishersInput;

  @Field(() => PublisherWhereUniqueInput, { nullable: true })
  @Type(() => PublisherWhereUniqueInput)
  connect?: Prisma.AtLeast<PublisherWhereUniqueInput, 'id' | 'name' | 'email'>;
}
