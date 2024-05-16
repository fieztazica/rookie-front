import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProductToAuthor } from '../product-to-author/product-to-author.model';
import { AuthorCount } from './author-count.output';

/**
 * @@deny('read', deleted)
 */
@ObjectType({ description: "@@deny('read', deleted)" })
export class Author {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  firstName!: string;

  @Field(() => String, { nullable: false })
  lastName!: string;

  @Field(() => String, { nullable: true })
  displayName!: string | null;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  phoneNumber!: string;

  @Field(() => String, { nullable: true })
  description!: string | null;

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

  @Field(() => [ProductToAuthor], { nullable: true })
  products?: Array<ProductToAuthor>;

  @Field(() => AuthorCount, { nullable: false })
  _count?: AuthorCount;
}
