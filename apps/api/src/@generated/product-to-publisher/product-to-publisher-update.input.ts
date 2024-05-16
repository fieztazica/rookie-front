import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateOneRequiredWithoutPublishersNestedInput } from '../product/product-update-one-required-without-publishers-nested.input';
import { Type } from 'class-transformer';
import { PublisherUpdateOneRequiredWithoutProductsNestedInput } from '../publisher/publisher-update-one-required-without-products-nested.input';

@InputType()
export class ProductToPublisherUpdateInput {
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => ProductUpdateOneRequiredWithoutPublishersNestedInput, {
    nullable: true,
  })
  @Type(() => ProductUpdateOneRequiredWithoutPublishersNestedInput)
  product?: ProductUpdateOneRequiredWithoutPublishersNestedInput;

  @Field(() => PublisherUpdateOneRequiredWithoutProductsNestedInput, {
    nullable: true,
  })
  publisher?: PublisherUpdateOneRequiredWithoutProductsNestedInput;
}
