import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutImagesInput } from './product-create-without-images.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutImagesInput } from './product-create-or-connect-without-images.input';
import { ProductUpsertWithoutImagesInput } from './product-upsert-without-images.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutImagesInput } from './product-update-to-one-with-where-without-images.input';

@InputType()
export class ProductUpdateOneRequiredWithoutImagesNestedInput {
  @Field(() => ProductCreateWithoutImagesInput, { nullable: true })
  @Type(() => ProductCreateWithoutImagesInput)
  create?: ProductCreateWithoutImagesInput;

  @Field(() => ProductCreateOrConnectWithoutImagesInput, { nullable: true })
  @Type(() => ProductCreateOrConnectWithoutImagesInput)
  connectOrCreate?: ProductCreateOrConnectWithoutImagesInput;

  @Field(() => ProductUpsertWithoutImagesInput, { nullable: true })
  @Type(() => ProductUpsertWithoutImagesInput)
  upsert?: ProductUpsertWithoutImagesInput;

  @Field(() => ProductWhereUniqueInput, { nullable: true })
  @Type(() => ProductWhereUniqueInput)
  connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id' | 'name'>;

  @Field(() => ProductUpdateToOneWithWhereWithoutImagesInput, {
    nullable: true,
  })
  @Type(() => ProductUpdateToOneWithWhereWithoutImagesInput)
  update?: ProductUpdateToOneWithWhereWithoutImagesInput;
}
