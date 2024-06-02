import { Prisma, Customer } from '@prisma/client';
import { prisma } from '.';
import { faker } from '@faker-js/faker';

export async function seedCustomers() {
  await prisma.customer.deleteMany();
  function createRandomCustomer(): Prisma.CustomerCreateInput {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return {
      email: faker.internet.email({
        firstName,
        lastName,
      }),
      firstName,
      lastName,
      phoneNumber: faker.phone.number(),
      displayName: `${firstName} ${lastName}`,
      gender: faker.helpers.arrayElement(['MALE', 'FEMALE', 'UNDEFINED']),
    };
  }

  const CUSTOMERS: Prisma.CustomerCreateInput[] = faker.helpers.multiple(
    createRandomCustomer,
    {
      count: {
        min: 5,
        max: 50,
      },
    },
  );

  const customers: Customer[] = [];
  for await (const customer of CUSTOMERS) {
    const created = await prisma.customer.create({
      data: customer,
    });
    customers.push(created);
  }

  console.log(`Seeded ${customers.length}/${CUSTOMERS.length} customers.`);

  return customers;
}
