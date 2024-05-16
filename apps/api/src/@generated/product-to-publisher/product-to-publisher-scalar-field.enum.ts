import { registerEnumType } from '@nestjs/graphql';

export enum ProductToPublisherScalarFieldEnum {
  productId = 'productId',
  publisherId = 'publisherId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(ProductToPublisherScalarFieldEnum, {
  name: 'ProductToPublisherScalarFieldEnum',
  description: undefined,
});
