import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToPublisherWhereInput } from './product-to-publisher-where.input';

@InputType()
export class ProductToPublisherListRelationFilter {
  @Field(() => ProductToPublisherWhereInput, { nullable: true })
  every?: ProductToPublisherWhereInput;

  @Field(() => ProductToPublisherWhereInput, { nullable: true })
  some?: ProductToPublisherWhereInput;

  @Field(() => ProductToPublisherWhereInput, { nullable: true })
  none?: ProductToPublisherWhereInput;
}
