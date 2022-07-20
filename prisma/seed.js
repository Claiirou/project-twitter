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
        pseudo: "Astridouille",
        picture: "/astridouille.jpg",
        content:
          "T'as le Covid ? Bois 1 litre de pulco, quand la bouteille est vide .... T'as pulco vide",
        date: "02 décembre 1954",
      },
      {
        pseudo: "Flowlence",
        picture: "/flowlence.jpg",
        content: "L'avenir appartient à ceux qui se .... ginto",
        date: "08 décembre 1989",
      },
      {
        pseudo: "Flowlence",
        picture: "/flowlence.jpg",
        content: "Qu'est-ce qu'un citron en retard ? Un citron pressé",
        date: "43 août 1994",
      },
      {
        pseudo: "Martine",
        picture: "/martine.png",
        content: "Hello ça boume ?",
        date: "37 juillet 2052",
      },
      {
        pseudo: "Martine",
        picture: "/martine.png",
        content: "Youplaboum",
        date: "28 février 2053",
      },
      {
        pseudo: "Flowlence",
        picture: "/flowlence.jpg",
        content: "C'est un sucre qui va dans un café et plouf",
        date: new Date("43 août 2102"),
      },
    ],
  });
}

seed();

module.exports = seed;
