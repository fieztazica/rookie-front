import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublisherCreateWithoutProductToPublishersInput } from './publisher-create-without-product-to-publishers.input';
import { Type } from 'class-transformer';
import { PublisherCreateOrConnectWithoutProductToPublishersInput } from './publisher-create-or-connect-without-product-to-publishers.input';
import { PublisherUpsertWithoutProductToPublishersInput } from './publisher-upsert-without-product-to-publishers.input';
import { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInput } from './publisher-where-unique.input';
import { PublisherUpdateToOneWithWhereWithoutProductToPublishersInput } from './publisher-update-to-one-with-where-without-product-to-publishers.input';

@InputType()
export class PublisherUpdateOneRequiredWithoutProductToPublishersNestedInput {
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

  @Field(() => PublisherUpsertWithoutProductToPublishersInput, {
    nullable: true,
  })
  @Type(() => PublisherUpsertWithoutProductToPublishersInput)
  upsert?: PublisherUpsertWithoutProductToPublishersInput;

  @Field(() => PublisherWhereUniqueInput, { nullable: true })
  @Type(() => PublisherWhereUniqueInput)
  connect?: Prisma.AtLeast<PublisherWhereUniqueInput, 'id' | 'name' | 'email'>;

  @Field(() => PublisherUpdateToOneWithWhereWithoutProductToPublishersInput, {
    nullable: true,
  })
  @Type(() => PublisherUpdateToOneWithWhereWithoutProductToPublishersInput)
  update?: PublisherUpdateToOneWithWhereWithoutProductToPublishersInput;
}
