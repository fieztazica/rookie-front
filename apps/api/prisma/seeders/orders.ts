import { prisma } from '.';
import { faker } from '@faker-js/faker';
import { Customer, Order, Prisma, Product } from '@prisma/client';

export async function seedOrders(products: Product[], customers: Customer[]) {
  await prisma.order.deleteMany();
  function createRandomOrder(): Prisma.OrderCreateInput {
    const items = faker.helpers
      .arrayElements(products, {
        min: 1,
        max: 5,
      })
      .map((product) => ({
        productId: product.id,
        quantity: faker.number.int({ min: 1, max: 10 }),
        price: product.price,
      }));
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    return {
      customer: {
        connect: {
          id: faker.helpers.arrayElement(customers).id,
        },
      },
      orderItems: {
        create: items,
      },
      total,
      status: faker.helpers.arrayElement([
        'PENDING',
        'COMPLETED',
        'CANCELLED',
        'SHIPPING',
      ]),
    };
  }

  const ORDERS: Prisma.OrderCreateInput[] = faker.helpers.multiple(
    createRandomOrder,
    {
      count: {
        min: 10,
        max: 100,
      },
    },
  );

  const orders: Order[] = [];

  for await (const order of ORDERS) {
    const created = await prisma.order.create({
      data: order,
    });
    orders.push(created);
  }

  console.log(`Seeded ${orders.length}/${ORDERS.length} orders.`);

  return orders;
}
