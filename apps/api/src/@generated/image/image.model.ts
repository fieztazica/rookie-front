import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Product } from '../product/product.model';

/**
 * @@deny('read', deleted)
 */
@ObjectType({ description: "@@deny('read', deleted)" })
export class Image {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  productId!: string;

  @Field(() => String, { nullable: false })
  url!: string;

  @Field(() => String, { nullable: true })
  alt!: string | null;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isThumbnail!: boolean;

  /**
   * @omit
   */
  @Field(() => Boolean, {
    nullable: false,
    defaultValue: false,
    description: '@omit',
  })
  deleted!: boolean;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => Product, { nullable: false })
  product?: Product;
}
