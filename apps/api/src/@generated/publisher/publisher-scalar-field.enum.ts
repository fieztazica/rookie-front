import { registerEnumType } from '@nestjs/graphql';

export enum PublisherScalarFieldEnum {
  id = 'id',
  name = 'name',
  displayName = 'displayName',
  email = 'email',
  phoneNumber = 'phoneNumber',
  website = 'website',
  deleted = 'deleted',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(PublisherScalarFieldEnum, {
  name: 'PublisherScalarFieldEnum',
  description: undefined,
});
