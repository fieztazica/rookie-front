import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PublisherWhereUniqueInput } from './publisher-where-unique.input';
import { Type } from 'class-transformer';
import { PublisherCreateWithoutProductsInput } from './publisher-create-without-products.input';

@InputType()
export class PublisherCreateOrConnectWithoutProductsInput {
  @Field(() => PublisherWhereUniqueInput, { nullable: false })
  @Type(() => PublisherWhereUniqueInput)
  where!: Prisma.AtLeast<PublisherWhereUniqueInput, 'id' | 'name' | 'email'>;

  @Field(() => PublisherCreateWithoutProductsInput, { nullable: false })
  @Type(() => PublisherCreateWithoutProductsInput)
  create!: PublisherCreateWithoutProductsInput;
}
