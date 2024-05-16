import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutImagesInput } from './product-create-without-images.input';

@InputType()
export class ProductCreateOrConnectWithoutImagesInput {
  @Field(() => ProductWhereUniqueInput, { nullable: false })
  @Type(() => ProductWhereUniqueInput)
  where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;

  @Field(() => ProductCreateWithoutImagesInput, { nullable: false })
  @Type(() => ProductCreateWithoutImagesInput)
  create!: ProductCreateWithoutImagesInput;
}
