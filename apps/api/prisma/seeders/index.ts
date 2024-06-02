import { PrismaClient } from '@prisma/client';
export { seedAuthors } from './authors';
export { seedCategories } from './categories';
export { seedCustomers } from './customers';
export { seedProducts } from './products';
export { seedConfigs } from './config';
export { seedFeedbacks } from './feedbacks';
export const prisma = new PrismaClient();
export function getRandomFrom<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
export function getRandomInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
export function getCreateModels<T extends { id: string | number }>(
  max: number = 2,
  modelName: string,
  data: T[],
) {
  const contents = new Array(getRandomInRange(1, max)).fill({
    [modelName]: {
      connect: { id: getRandomFrom(data).id },
    },
  });
  console.log(contents.flatMap((c) => Object.values(c)));
  console.log(
    `[${modelName}]\tCreating ${contents.length} (maximum ${max}) from ${data.length} entities`,
  );
  return {
    create: contents,
  };
}
