import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublisherCreateWithoutProductsInput } from './publisher-create-without-products.input';
import { Type } from 'class-transformer';
import { PublisherCreateOrConnectWithoutProductsInput } from './publisher-create-or-connect-without-products.input';
import { PublisherUpsertWithoutProductsInput } from './publisher-upsert-without-products.input';
import { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInput } from './publisher-where-unique.input';
import { PublisherUpdateToOneWithWhereWithoutProductsInput } from './publisher-update-to-one-with-where-without-products.input';

@InputType()
export class PublisherUpdateOneRequiredWithoutProductsNestedInput {
  @Field(() => PublisherCreateWithoutProductsInput, { nullable: true })
  @Type(() => PublisherCreateWithoutProductsInput)
  create?: PublisherCreateWithoutProductsInput;

  @Field(() => PublisherCreateOrConnectWithoutProductsInput, { nullable: true })
  @Type(() => PublisherCreateOrConnectWithoutProductsInput)
  connectOrCreate?: PublisherCreateOrConnectWithoutProductsInput;

  @Field(() => PublisherUpsertWithoutProductsInput, { nullable: true })
  @Type(() => PublisherUpsertWithoutProductsInput)
  upsert?: PublisherUpsertWithoutProductsInput;

  @Field(() => PublisherWhereUniqueInput, { nullable: true })
  @Type(() => PublisherWhereUniqueInput)
  connect?: Prisma.AtLeast<PublisherWhereUniqueInput, 'id' | 'name' | 'email'>;

  @Field(() => PublisherUpdateToOneWithWhereWithoutProductsInput, {
    nullable: true,
  })
  @Type(() => PublisherUpdateToOneWithWhereWithoutProductsInput)
  update?: PublisherUpdateToOneWithWhereWithoutProductsInput;
}
