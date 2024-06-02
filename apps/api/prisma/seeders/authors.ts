import { Prisma, Author } from '@prisma/client';
import { prisma } from '.';
import { faker } from '@faker-js/faker';

export function createRandomAuthor(): Prisma.AuthorCreateInput {
  return {
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number(),
    displayName: `${faker.person.firstName()} ${faker.person.lastName()}`,
  };
}

export const AUTHORS: Prisma.AuthorCreateInput[] = faker.helpers.multiple(
  createRandomAuthor,
  {
    count: {
      min: 10,
      max: 30,
    },
  },
);

export async function seedAuthors() {
  await prisma.author.deleteMany();
  const authors: Author[] = [];
  for await (const author of AUTHORS) {
    const created = await prisma.author.create({
      data: author
    });
    authors.push(created);
  }

  console.log(`Seeded ${authors.length}/${AUTHORS.length} authors.`);
  return authors;
}
