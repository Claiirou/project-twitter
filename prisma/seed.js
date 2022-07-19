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
    data: [{ pseudo: "Martine", tweet: "Hello ça boume ?" }],
  });
}

seed();

module.exports = seed;
