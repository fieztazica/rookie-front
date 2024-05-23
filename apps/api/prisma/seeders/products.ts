import { Author, Category } from '@prisma/client';
import { getCreateModels, prisma } from '.';

/**
name,author,category,price
Barricade,Hymie Quan,non-fiction,28.34
Blackadder Back & Forth,Farrel Meritt,romance,21.12
"Devil's Chair, The",Westleigh Nias,fiction,30.62
Tennessee Johnson,Layne Pollendine,mystery,9.79
"Best of Ernie and Bert, The",Roderick Vasilyevski,fiction,32.19
*/

export async function seedProducts(authors: Author[], categories: Category[]) {
  const book1 = await prisma.product.upsert({
    where: { name: 'Barricade' },
    update: {},
    create: {
      name: 'Barricade',
      displayName: 'Barricade',
      authors: await getCreateModels(2, 'author', authors),
      categories: await getCreateModels(3, 'category', categories),
      imageUrl: `https://dummyimage.com/300x400?text=${encodeURIComponent('Barricade')}`,
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
      imageUrl: `https://dummyimage.com/300x400?text=${encodeURIComponent('Blackadder Back & Forth')}`,
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
      imageUrl: `https://dummyimage.com/300x400?text=${encodeURIComponent("Devil's Chair, The")}`,
      price: 30.62,
    },
  });

  const products = [book1, book2, book3];
  console.log(`Seeded ${products.length} products.`);
  return products;
}
