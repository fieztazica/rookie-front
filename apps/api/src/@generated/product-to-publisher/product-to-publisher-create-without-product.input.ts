import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublisherCreateNestedOneWithoutProductsInput } from '../publisher/publisher-create-nested-one-without-products.input';

@InputType()
export class ProductToPublisherCreateWithoutProductInput {
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => PublisherCreateNestedOneWithoutProductsInput, {
    nullable: false,
  })
  publisher!: PublisherCreateNestedOneWithoutProductsInput;
}
