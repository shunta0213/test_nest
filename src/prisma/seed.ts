import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   const post1 = await prisma.user.upsert({
//     where: { name: 'Test User' },
//     update: {},
//     create: {
//       name: 'Test User 1',
//       desc: 'A Test User 1',
//     },
//   });

//   const post2 = await prisma.user.upsert({
//     where: { name: 'Test User 2' },
//     update: {},
//     create: {
//       name: 'Test User 2',
//       desc: 'A test user2',
//     },
//   });

//   console.log(post1, post2);
// }

// main()
//   .catch((e) => {
//     console.log(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
