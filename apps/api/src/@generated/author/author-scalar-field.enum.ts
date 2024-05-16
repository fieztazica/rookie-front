import { registerEnumType } from '@nestjs/graphql';

export enum AuthorScalarFieldEnum {
  id = 'id',
  firstName = 'firstName',
  lastName = 'lastName',
  displayName = 'displayName',
  email = 'email',
  phoneNumber = 'phoneNumber',
  description = 'description',
  deleted = 'deleted',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(AuthorScalarFieldEnum, {
  name: 'AuthorScalarFieldEnum',
  description: undefined,
});
