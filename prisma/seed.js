const db = require("../db");

async function seed() {
  const martine = await db.user.create({
    data: {
      pseudo: "Martine",
      email: "matine@lune.com",
      picture: "/martine.png",
    },
  });

  await db.tweet.createMany({
    data: [
      {
        userId: martine.id,
        content: "Hello ça boume ?",
        date: new Date("2053-02-29"),
      },
      {
        userId: martine.id,
        content: "Youplaboum",
        date: new Date("2053-04-32"),
      },
    ],
  });
}

seed();

module.exports = seed;
