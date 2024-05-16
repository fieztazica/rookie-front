import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublisherUpdateWithoutProductsInput } from './publisher-update-without-products.input';
import { Type } from 'class-transformer';
import { PublisherCreateWithoutProductsInput } from './publisher-create-without-products.input';
import { PublisherWhereInput } from './publisher-where.input';

@InputType()
export class PublisherUpsertWithoutProductsInput {
  @Field(() => PublisherUpdateWithoutProductsInput, { nullable: false })
  @Type(() => PublisherUpdateWithoutProductsInput)
  update!: PublisherUpdateWithoutProductsInput;

  @Field(() => PublisherCreateWithoutProductsInput, { nullable: false })
  @Type(() => PublisherCreateWithoutProductsInput)
  create!: PublisherCreateWithoutProductsInput;

  @Field(() => PublisherWhereInput, { nullable: true })
  @Type(() => PublisherWhereInput)
  where?: PublisherWhereInput;
}
