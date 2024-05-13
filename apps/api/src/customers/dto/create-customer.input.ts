import { Field, InputType } from '@nestjs/graphql';
import { $Enums, Prisma } from '@prisma/client';

@InputType()
export class CreateCustomerInput implements Prisma.CustomerCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

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

  @Field(() => $Enums.Gender, {
    nullable: true,
    defaultValue: $Enums.Gender['UNDEFINED'],
  })
  gender?: $Enums.Gender;

  @Field(() => String, { nullable: true })
  accountId?: string;

  @Field(() => Date, { nullable: true, defaultValue: new Date() })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => Prisma['OrderCreateNestedManyWithoutCustomerInput'], {
    nullable: true,
  })
  orders?: Prisma.OrderCreateNestedManyWithoutCustomerInput;

  @Field(() => Prisma['FeedbackCreateNestedManyWithoutCustomerInput'], {
    nullable: true,
  })
  feedback?: Prisma.FeedbackCreateNestedManyWithoutCustomerInput;
}
