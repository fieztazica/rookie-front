import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutPublishersInput } from '../product/product-create-nested-one-without-publishers.input';
import { Type } from 'class-transformer';
import { PublisherCreateNestedOneWithoutProductsInput } from '../publisher/publisher-create-nested-one-without-products.input';

@InputType()
export class ProductToPublisherCreateInput {
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => ProductCreateNestedOneWithoutPublishersInput, {
    nullable: false,
  })
  @Type(() => ProductCreateNestedOneWithoutPublishersInput)
  product!: ProductCreateNestedOneWithoutPublishersInput;

  @Field(() => PublisherCreateNestedOneWithoutProductsInput, {
    nullable: false,
  })
  publisher!: PublisherCreateNestedOneWithoutProductsInput;
}
