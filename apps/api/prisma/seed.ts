import {
  prisma,
  seedCustomers,
  seedCategories,
  seedAuthors,
  seedProducts,
} from './seeders';
import { seedConfigs } from './seeders/config';

async function main() {
  const configs = await seedConfigs();
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
