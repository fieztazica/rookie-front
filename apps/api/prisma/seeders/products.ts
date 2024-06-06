import { faker } from '@faker-js/faker';
import { Author, Category, Prisma, Product } from '@prisma/client';
import { prisma } from '.';

export function createRandomProduct(): Prisma.ProductCreateInput {
  const price = parseFloat(
    faker.commerce.price({
      min: 10,
      max: 100,
    }),
  );
  return {
    name: faker.commerce.productName(),
    displayName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    imageUrl: faker.image.url({
      width: 300,
      height: 400,
    }),
    price,
    salePrice:
      faker.number.int({
        max: 5,
      }) < 1
        ? faker.number.float({
            min: -1,
            max: price - 1,
            precision: 2,
          })
        : -1,
    storeQuantity: faker.number.int({ min: 0, max: 100 }),
    authors: {
      connect: [],
    },
    views: faker.number.int({ min: 0, max: 1000000 }),
  };
}

export const PRODUCTS: Prisma.ProductCreateInput[] = faker.helpers.multiple(
  createRandomProduct,
  {
    count: 45,
  },
);

export async function seedProducts(authors: Author[], categories: Category[]) {
  await prisma.product.deleteMany();
  const products: Product[] = [];
  for await (const product of PRODUCTS) {
    const created = await prisma.product.upsert({
      where: { name: product.name },
      create: {
        ...product,
        categories: {
          create: faker.helpers
            .arrayElements(categories, {
              min: 1,
              max: 3,
            })
            .map((category) => ({
              categoryId: category.id,
            })),
        },
        authors: {
          create: faker.helpers
            .arrayElements(authors, {
              min: 1,
              max: 3,
            })
            .map((authors) => ({
              authorId: authors.id,
            })),
        },
      },
      update: {},
    });
    products.push(created);
  }
  console.log(`Seeded ${products.length}/${PRODUCTS.length} products.`);
  return products;
}
