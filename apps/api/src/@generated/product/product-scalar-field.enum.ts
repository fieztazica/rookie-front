import { registerEnumType } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    price = "price",
    accountId = "accountId",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
