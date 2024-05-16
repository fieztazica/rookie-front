import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProductToPublisherProductIdPublisherIdCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  productId!: string;

  @Field(() => String, { nullable: false })
  publisherId!: string;
}
