const db = require("../db");

async function seed() {
  await db.user.create({
    data: {
      pseudo: "Martine",
      email: "matine@lune.com",
      picture: "/martine.png",
    },
  });

  // await db.tweet.createMany({
  //   data: [
  //     { pseudo: "Martine", content: "Hello ça boume ?" },
  //     { pseudo: "Martin", content: "Youplaboum" },
  //   ],
  // });
}

seed();

module.exports = seed;
