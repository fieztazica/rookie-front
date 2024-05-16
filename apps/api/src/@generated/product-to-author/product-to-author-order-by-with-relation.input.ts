import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductOrderByWithRelationInput } from '../product/product-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { AuthorOrderByWithRelationInput } from '../author/author-order-by-with-relation.input';

@InputType()
export class ProductToAuthorOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  productId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  authorId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => ProductOrderByWithRelationInput, { nullable: true })
  @Type(() => ProductOrderByWithRelationInput)
  product?: ProductOrderByWithRelationInput;

  @Field(() => AuthorOrderByWithRelationInput, { nullable: true })
  author?: AuthorOrderByWithRelationInput;
}
