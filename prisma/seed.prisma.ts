import { prisma } from "../src/config/database";

async function main() {
  await prisma.finding.createMany({
    data: [
      {
        title: 'Titulo 1',
        description: 'Algum primeiro lorem ipsum'
      },
      {
        title: 'Titulo 2',
        description: 'Algum segundo lorem ipsum'
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