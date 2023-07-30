import { prisma } from "../src/config/database";

async function cleanDB() {
  await prisma.$executeRaw`TRUNCATE TABLE "findings" RESTART IDENTITY CASCADE;`
}
async function main() {
  const findings = await prisma.finding.findMany();
  if (findings) cleanDB();
  await prisma.finding.createMany({
    data: [
      {
        title: 'Titulo 1',
        description: 'Algum primeiro lorem ipsum',
        link: 'https://tsaytson.github.io',
        imageUrl: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt232a8ff06bf93ebd/63eeb1546495981254659630/Valorant_2022_EP6-1_PlayVALORANT_ContentStackThumbnail_1200x625_MB01.png'
      },
      {
        title: 'Titulo 2',
        description: 'Algum segundo lorem ipsum',
        link: 'https://tsaytson.github.io',
        imageUrl: 'https://assets.b9.com.br/wp-content/uploads/2021/06/vavab9.jpg'
      }
    ]
  })
}

main().
  then(() => {
    console.log('Records inserted');
  }).
  catch((error) => {
    console.log(error);
    process.exit(1);
  }).
  finally(async () => {
    await prisma.$disconnect();
  })