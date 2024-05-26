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

  const configs = [about];

  console.log(`Seeded ${configs.length} configs.`);

  return configs;
}
