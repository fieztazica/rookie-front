import {
  prisma,
  seedCustomers,
  seedCategories,
  seedAuthors,
  seedPublishers,
  seedProducts,
} from './seeders';

async function main() {
  const customers = await seedCustomers();
  const categories = await seedCategories();
  const authors = await seedAuthors();
  const publishers = await seedPublishers();
  const products = await seedProducts(authors, categories, publishers);
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
