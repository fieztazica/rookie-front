import {
  prisma,
  seedCustomers,
  seedCategories,
  seedAuthors,
  seedProducts,
} from './seeders';

async function main() {
  const customers = await seedCustomers();
  const categories = await seedCategories();
  const authors = await seedAuthors();
  const products = await seedProducts(authors, categories);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
