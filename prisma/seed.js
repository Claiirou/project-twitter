const db = require("../db");

async function seed() {
  const martine = await db.user.create({
    data: {
      pseudo: "Martine",
      email: "matine@lune.com",
      picture: "/martine.png",
    },
  });

  const flowlence = await db.user.create({
    data: {
      pseudo: "Flowlence",
      email: "flowlence@lune.com",
      picture: "/flowlence.jpg",
    },
  });

  const astridouille = await db.user.create({
    data: {
      pseudo: "Astridouille",
      email: "astridouille@lune.com",
      picture: "/astridouille.jpg",
    },
  });

  await db.tweet.createMany({
    data: [
      {
        userId: astridouille.id,
        content:
          "T'as le Covid ? Bois 1 litre de pulco, quand la bouteille est vide .... T'as pulco vide",
        date: new Date("02 décembre 1954"),
      },
      {
        userId: flowlence.id,
        content: "L'avenir appartient à ceux qui se .... ginto",
        date: new Date("08 décembre 1989"),
      },
      {
        userId: flowlence.id,
        content: "Qu'est-ce qu'un citron en retard ? Un citron pressé",
        date: new Date("43 août 1994"),
      },
      {
        userId: martine.id,
        content: "Hello ça boume ?",
        date: new Date("37 juillet 2052"),
      },
      {
        userId: martine.id,
        content: "Youplaboum",
        date: new Date("28 février 2053"),
      },
      {
        userId: flowlence.id,
        content: "C'est un sucre qui va dans un café et plouf",
        date: new Date("43 août 2102"),
      },
    ],
  });
}

seed();

module.exports = seed;
