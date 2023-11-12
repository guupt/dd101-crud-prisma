import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const gustavo = await prisma.profile.create({
    data: {
      name: "gustavo",
    },
  });
  console.log(gustavo);

  const gustavos = await prisma.profile.findMany({
    where: {
      name: {
        contains: "g",
      },
    },
  });
  console.log(gustavos);

  const updatedGustavo = await prisma.profile.update({
    where: {
      id: 1,
    },
    data: {
      name: "Fulano",
    },
  });
  console.log(updatedGustavo);

  //   const deletedGustavos = await prisma.profile.deleteMany({
  //     where: {
  //       name: {
  //         contains: "gustavo",
  //       },
  //     },
  //   });
  //   console.log(deletedGustavos);
  //   prisma.$disconnect;

  const deletedGustavo = await prisma.profile.delete({
    where: {
      id: 6,
    },
  });
  console.log(deletedGustavo);
  prisma.$disconnect;
}

main();
