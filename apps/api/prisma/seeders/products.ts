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
    salePrice: faker.number.float({
      min: -1,
      max: price,
      precision: 2,
    }),
    storeQuantity: faker.number.int({ min: 0, max: 100 }),
    authors: {
      connect: [],
    },
  };
}

export const PRODUCTS: Prisma.ProductCreateInput[] = faker.helpers.multiple(
  createRandomProduct,
  {
    count: 20,
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
          create: faker.helpers.arrayElements(categories).map((category) => ({
            categoryId: category.id,
          })),
        },
        authors: {
          create: faker.helpers.arrayElements(authors).map((authors) => ({
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
