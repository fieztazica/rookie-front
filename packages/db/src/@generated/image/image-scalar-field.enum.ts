import { registerEnumType } from '@nestjs/graphql';

export enum ImageScalarFieldEnum {
    id = "id",
    productId = "productId",
    url = "url",
    alt = "alt",
    isThumbnail = "isThumbnail",
    deleted = "deleted",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ImageScalarFieldEnum, { name: 'ImageScalarFieldEnum', description: undefined })
