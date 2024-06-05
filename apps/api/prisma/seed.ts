import {
  prisma,
  seedCustomers,
  seedCategories,
  seedAuthors,
  seedProducts,
  seedFeedbacks,
  seedConfigs,
  seedOrders,
} from './seeders';

async function main() {
  const configs = await seedConfigs();
  const customers = await seedCustomers();
  const categories = await seedCategories();
  const authors = await seedAuthors();
  const products = await seedProducts(authors, categories);
  const orders = await seedOrders(products, customers);
  const feedbacks = await seedFeedbacks(products, customers);
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
