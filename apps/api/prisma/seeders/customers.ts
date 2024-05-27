import { prisma } from '.';

export async function seedCustomers() {
  const alice = await prisma.customer.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      firstName: 'Alice',
      lastName: 'Smith',
      phoneNumber: '555-555-5555',
      displayName: 'Alice Smith',
    },
  });

  const bob = await prisma.customer.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      firstName: 'Bob',
      lastName: 'Smith',
      phoneNumber: '555-555-5556',
      displayName: 'Bob Smith',
    },
  });

  const charlie = await prisma.customer.upsert({
    where: { email: 'charlie@prisma.io' },
    update: {},
    create: {
      email: 'charlie@prisma.io',
      firstName: 'Charlie',
      lastName: 'Smith',
      phoneNumber: '555-555-5557',
      displayName: 'Charlie Smith',
    },
  });

  const customers = [alice, bob, charlie];

  console.log(`Seeded ${customers.length} customers.`);

  return customers;
}
