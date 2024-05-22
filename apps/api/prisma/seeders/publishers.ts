import { prisma } from '.';

/**
name,email,phone_number,website
Jamia,lfinicj0@histats.com,215-499-8100,https://businesswire.com/turpis/adipiscing/lorem/vitae/mattis/nibh/ligula.xml?accumsan=mauris&odio=enim&curabitur=leo&convallis=rhoncus&duis=sed&consequat=vestibulum&dui=sit&nec=amet&nisi=cursus
Riffpedia,mrushby1@senate.gov,896-492-7507,https://hostgator.com/sit/amet.png?elementum=tempor&eu=convallis&interdum=nulla&eu=neque&tincidunt=libero
Mita,aheibel2@ovh.net,160-690-7777,https://ustream.tv/vel/pede.js?magnis=nunc&dis=proin&parturient=at&montes=turpis&nascetur=a&ridiculus=pede&mus=posuere&vivamus=nonummy&vestibulum=integer&sagittis=non&sapien=velit&cum=donec&sociis=diam&natoque=neque&penatibus=vestibulum&et=eget&magnis=vulputate&dis=ut&parturient=ultrices
 */

export async function seedPublishers() {
  const jamia = await prisma.publisher.upsert({
    where: { email: 'lfinicj0@histats.com' },
    update: {},
    create: {
      name: 'Jamia',
      email: 'lfinicj0@histats.com',
      phoneNumber: '215-499-8100',
      website:
        'https://businesswire.com/turpis/adipiscing/lorem/vitae/mattis/nibh/ligula.xml?accumsan=mauris&odio=enim&curabitur=leo&convallis=rhoncus&duis=sed&consequat=vestibulum&dui=sit&nec=amet&nisi=cursus',
    },
  });

  const riffpedia = await prisma.publisher.upsert({
    where: { email: 'mrushby1@senate.gov' },
    update: {},
    create: {
      name: 'Riffpedia',
      email: 'mrushby1@senate.gov',
      phoneNumber: '896-492-7507',
      website:
        'https://hostgator.com/sit/amet.png?elementum=tempor&eu=convallis&interdum=nulla&eu=neque&tincidunt=libero',
    },
  });

  const mita = await prisma.publisher.upsert({
    where: { email: 'aheibel2@ovh.net' },
    update: {},
    create: {
      name: 'Mita',
      email: 'aheibel2@ovh.net',
      phoneNumber: '160-690-7777',
      website:
        'https://ustream.tv/vel/pede.js?magnis=nunc&dis=proin&parturient=at&montes=turpis&nascetur=a&ridiculus=pede&mus=posuere&vivamus=nonummy&vestibulum=integer&sagittis=non&sapien=velit&cum=donec&sociis=diam&natoque=neque&penatibus=vestibulum&et=eget&magnis=vulputate&dis=ut&parturient=ultrices',
    },
  });

  const publishers = [jamia, riffpedia, mita];
  console.log(`Seeded ${publishers.length} publishers.`);
  return publishers;
}
