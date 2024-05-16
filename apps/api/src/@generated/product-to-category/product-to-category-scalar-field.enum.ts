import { registerEnumType } from '@nestjs/graphql';

export enum ProductToCategoryScalarFieldEnum {
    productId = "productId",
    categoryId = "categoryId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProductToCategoryScalarFieldEnum, { name: 'ProductToCategoryScalarFieldEnum', description: undefined })
