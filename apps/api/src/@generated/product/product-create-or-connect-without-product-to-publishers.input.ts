import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutProductToPublishersInput } from './product-create-without-product-to-publishers.input';

@InputType()
export class ProductCreateOrConnectWithoutProductToPublishersInput {
  @Field(() => ProductWhereUniqueInput, { nullable: false })
  @Type(() => ProductWhereUniqueInput)
  where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;

  @Field(() => ProductCreateWithoutProductToPublishersInput, {
    nullable: false,
  })
  @Type(() => ProductCreateWithoutProductToPublishersInput)
  create!: ProductCreateWithoutProductToPublishersInput;
}
