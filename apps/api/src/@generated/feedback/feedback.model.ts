import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Customer } from '../customer/customer.model';
import { Product } from '../product/product.model';

/**
 * @@deny('read', deleted)
 */
@ObjectType({ description: "@@deny('read', deleted)" })
export class Feedback {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  customerId!: string;

  @Field(() => String, { nullable: false })
  productId!: string;

  @Field(() => String, { nullable: false })
  message!: string;

  @Field(() => Int, { nullable: false })
  rating!: number;

  @Field(() => String, { nullable: true })
  status!: string | null;

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

  @Field(() => Customer, { nullable: false })
  customer?: Customer;

  @Field(() => Product, { nullable: false })
  product?: Product;
}
