import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductToPublisherCreateManyPublisherInput } from './product-to-publisher-create-many-publisher.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductToPublisherCreateManyPublisherInputEnvelope {
  @Field(() => [ProductToPublisherCreateManyPublisherInput], {
    nullable: false,
  })
  @Type(() => ProductToPublisherCreateManyPublisherInput)
  data!: Array<ProductToPublisherCreateManyPublisherInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
