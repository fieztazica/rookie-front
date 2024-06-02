import { prisma } from '.';

export async function seedConfigs() {
  const about = await prisma.config.upsert({
    where: { key: 'about' },
    update: {},
    create: {
      key: 'about',
      value: '<h1>About</h1>',
    },
  });

  const apiKey = await prisma.config.upsert({
    where: { key: 'API_KEY' },
    update: {},
    create: {
      key: 'API_KEY',
      value: process.env.API_KEY,
    },
  });

  const configs = [about, apiKey];

  console.log(`Seeded ${configs.length} configs.`);

  return configs;
}
