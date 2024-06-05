import { prisma } from '.';

export async function seedConfigs() {
  const about = await prisma.config.upsert({
    where: { key: 'about' },
    update: {},
    create: {
      key: 'about',
      value: `<h1 style="text-align: center;"><span class="font-bold"><strong>Welcome to Bookworm</strong></span></h1>
      <p>&nbsp;</p>
      <p style="text-align: center;"><em>"Bookworm is an independent New York bookstore and language school with locations in Manhattan and Brooklyn. We specialize in travel books and language classes."</em></p>
      <p style="text-align: center;">&nbsp;</p>
      <table style="border-collapse: collapse; width: 100%; height: 53px;><colgroup><col style="width: 50.0499%;"><col style="width: 50.0499%;"></colgroup>
      <tbody>
      <tr style="height: 26.5px;">
      <td>
      <h2><span class="font-semibold">Our Story</span></h2>
      </td>
      <td>
      <h2><span class="font-semibold">Our Vision</span></h2>
      </td>
      </tr>
      <tr style="height: 26.5px;">
      <td>
      <p>The name Bookworm was taken from the original name for New York International Airport, which was renamed JFK in December 1963.</p>
      <p>Our Manhattan store has just moved to the West Village. Our new location is 170 7th Avenue South, at the corner of Perry Street.</p>
      <p>From March 2008 through May 2016, the store was located in the Flatiron District.</p>
      </td>
      <td>
      <p>One of the last travel bookstores in the country, our Manhattan store carries a range of guidebooks (all 10% off) to suit the needs and tastes of every traveler and budget.</p>
      <p>We believe that a novel or travelogue can be just as valuable a key to a place as any guidebook, and our well-read, well-traveled staff is happy to make reading recommendations for any traveler, book lover, or gift giver.</p>
      </td>
      </tr>
      </tbody>
      </table>`,
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
