import { prisma } from '.';

/**
 *
author_id,first_name,last_name,email,phone_number
1,Von,Maidlow,vmaidlow0@aboutads.info,815-545-1444
2,Claribel,Barwis,cbarwis1@auda.org.au,437-907-0792
3,Francklyn,De Roeck,fderoeck2@lulu.com,234-735-3399
4,Robin,Farrer,rfarrer3@oracle.com,488-760-7186
5,Town,Bagwell,tbagwell4@salon.com,492-241-1620
 */

export async function seedAuthors() {
  const von = await prisma.author.upsert({
    where: { email: 'vmaidlow0@aboutads.info' },
    update: {},
    create: {
      firstName: 'Von',
      lastName: 'Maidlow',
      email: 'vmaidlow0@aboutads.info',
      phoneNumber: '815-545-1444',
    },
  });

  const claribel = await prisma.author.upsert({
    where: { email: 'cbarwis1@auda.org.au' },
    update: {},
    create: {
      firstName: 'Claribel',
      lastName: 'Barwis',
      email: 'cbarwis1@auda.org.au',
      phoneNumber: '437-907-0792',
    },
  });

  const franks = await prisma.author.upsert({
    where: { email: 'fderoeck2@lulu.com' },
    update: {},
    create: {
      firstName: 'Francklyn',
      lastName: 'De Roeck',
      email: 'fderoeck2@lulu.com',
      phoneNumber: '234-735-3399',
    },
  });

  const town = await prisma.author.upsert({
    where: { email: 'tbagwell4@salon.com' },
    update: {},
    create: {
      firstName: 'Town',
      lastName: 'Bagwell',
      email: 'tbagwell4@salon.com',
      phoneNumber: '492-241-1620',
    },
  });

  const authors = [von, claribel, franks, town];
  console.log(`Seeded ${authors.length} authors.`);
  return authors;
}
