import { registerEnumType } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
    id = "id",
    name = "name",
    displayName = "displayName",
    description = "description",
    price = "price",
    salePrice = "salePrice",
    ratings = "ratings",
    accountId = "accountId",
    storeQuantity = "storeQuantity",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
