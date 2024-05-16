import { registerEnumType } from '@nestjs/graphql';

export enum OrderItemScalarFieldEnum {
  orderId = 'orderId',
  productId = 'productId',
  price = 'price',
  quantity = 'quantity',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(OrderItemScalarFieldEnum, {
  name: 'OrderItemScalarFieldEnum',
  description: undefined,
});
