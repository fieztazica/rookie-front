import { prisma } from '.';
import { faker } from '@faker-js/faker';
import { Customer, Feedback, Prisma, Product } from '@prisma/client';

export async function seedFeedbacks(
  products: Product[],
  customers: Customer[],
) {
  await prisma.feedback.deleteMany();
  function createRandomFeedback(): Prisma.FeedbackCreateInput {
    return {
      message: faker.lorem.paragraph(),
      rating: faker.number.int({ min: 1, max: 5 }),
      title: faker.lorem.sentence(),
      product: {
        connect: {
          id: faker.helpers.arrayElement(products).id,
        },
      },
      customer: {
        connect: {
          id: faker.helpers.arrayElement(customers).id,
        },
      },
    };
  }

  const FEEDBACKS: Prisma.FeedbackCreateInput[] = faker.helpers.multiple(
    createRandomFeedback,
    {
      count: faker.number.int({
        min: 20,
        max: 200,
      }),
    },
  );

  const feedbacks: Feedback[] = [];

  for await (const feedback of FEEDBACKS) {
    const created = await prisma.feedback.create({
      data: feedback,
    });
    feedbacks.push(created);
  }

  console.log(`Seeded ${feedbacks.length}/${FEEDBACKS.length} feedbacks.`);

  return feedbacks;
}
