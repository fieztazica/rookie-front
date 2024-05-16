import { Author, Category, Publisher } from '@prisma/client';
import { getCreateModels, prisma } from '.';

/**

name,author,category,publisher,price
Barricade,Hymie Quan,non-fiction,Roombo,28.34
Blackadder Back & Forth,Farrel Meritt,romance,Twitternation,21.12
"Devil's Chair, The",Westleigh Nias,fiction,Brainbox,30.62
Tennessee Johnson,Layne Pollendine,mystery,Linkbuzz,9.79
"Best of Ernie and Bert, The",Roderick Vasilyevski,fiction,Oyonder,32.19
*/

export async function seedProducts(
  authors: Author[],
  categories: Category[],
  publishers: Publisher[],
) {
  const book1 = await prisma.product.upsert({
    where: { name: 'Barricade' },
    update: {},
    create: {
      name: 'Barricade',
      displayName: 'Barricade',
      authors: await getCreateModels(2, 'author', authors),
      categories: await getCreateModels(3, 'category', categories),
      publishers: await getCreateModels(1, 'publisher', publishers),
      price: 28.34,
    },
  });

  const book2 = await prisma.product.upsert({
    where: { name: 'Blackadder Back & Forth' },
    update: {},
    create: {
      name: 'Blackadder Back & Forth',
      displayName: 'Blackadder Back & Forth',
      authors: await getCreateModels(2, 'author', authors),
      categories: await getCreateModels(3, 'category', categories),
      publishers: await getCreateModels(1, 'publisher', publishers),
      price: 21.12,
    },
  });

  const book3 = await prisma.product.upsert({
    where: { name: 'Blackadder Back & Forth'.trim() },
    update: {},
    create: {
      name: "Devil's Chair, The",
      displayName: "Devil's Chair, The",
      authors: await getCreateModels(2, 'author', authors),
      categories: await getCreateModels(3, 'category', categories),
      publishers: await getCreateModels(1, 'publisher', publishers),
      price: 30.62,
    },
  });

  const products = [book1, book2, book3];
  console.log(`Seeded ${products.length} products.`);
  return products;
}
