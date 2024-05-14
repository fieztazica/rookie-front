import { registerEnumType } from '@nestjs/graphql';

export enum FeedbackScalarFieldEnum {
    id = "id",
    customerId = "customerId",
    productId = "productId",
    message = "message",
    rating = "rating",
    status = "status",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FeedbackScalarFieldEnum, { name: 'FeedbackScalarFieldEnum', description: undefined })
