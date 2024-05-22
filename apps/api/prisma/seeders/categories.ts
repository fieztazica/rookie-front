import { prisma } from '.';

export async function seedCategories() {
  const fiction = await prisma.category.upsert({
    where: { name: 'fiction' },
    update: {},
    create: {
      name: 'fiction',
      displayName: 'Fiction',
      description: 'Fiction',
    },
  });

  const nonFiction = await prisma.category.upsert({
    where: { name: 'non-fiction' },
    update: {},
    create: {
      name: 'non-fiction',
      displayName: 'Non-Fiction',
      description: 'Non-Fiction',
    },
  });

  const mystery = await prisma.category.upsert({
    where: { name: 'mystery' },
    update: {},
    create: {
      name: 'mystery',
      displayName: 'Mystery',
      description: 'Mystery',
    },
  });

  const romance = await prisma.category.upsert({
    where: { name: 'romance' },
    update: {},
    create: {
      name: 'romance',
      displayName: 'Romance',
      description: 'Romance',
    },
  });

  const scienceFiction = await prisma.category.upsert({
    where: { name: 'science-fiction' },
    update: {},
    create: {
      name: 'science-fiction',
      displayName: 'Science Fiction',
      description: 'Science Fiction',
    },
  });

  const categories = [fiction, nonFiction, mystery, romance, scienceFiction];

  console.log(`Seeded ${categories.length} categories.`);

  return categories;
}
