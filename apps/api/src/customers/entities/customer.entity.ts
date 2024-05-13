import { Field, ObjectType } from '@nestjs/graphql';
import { $Enums, Customer } from '@prisma/client';

@ObjectType()
export class CustomerEntity implements Customer {
  @Field(() => $Enums.Gender)
  gender: $Enums.Gender;

  @Field(() => String, { description: 'Auth Account ID' })
  accountId: string;

  @Field(() => String)
  id: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  phoneNumber: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  deleted: boolean;
}
