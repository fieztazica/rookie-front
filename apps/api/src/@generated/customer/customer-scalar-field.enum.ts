import { registerEnumType } from '@nestjs/graphql';

export enum CustomerScalarFieldEnum {
    id = "id",
    username = "username",
    email = "email",
    phoneNumber = "phoneNumber",
    firstName = "firstName",
    lastName = "lastName",
    displayName = "displayName",
    gender = "gender",
    accountId = "accountId",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CustomerScalarFieldEnum, { name: 'CustomerScalarFieldEnum', description: undefined })
