import { registerEnumType } from '@nestjs/graphql';

export enum ProductToAuthorScalarFieldEnum {
  productId = 'productId',
  authorId = 'authorId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(ProductToAuthorScalarFieldEnum, {
  name: 'ProductToAuthorScalarFieldEnum',
  description: undefined,
});
