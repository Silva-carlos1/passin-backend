import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "3a525404-1069-4725-a78b-7c5c4b066c5a",
      title: "Event",
      slug: "event",
      details: "Um evento para devs apaixadonados por programação",
      maximumAttendees: 100,

    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
