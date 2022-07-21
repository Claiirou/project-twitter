const db = require("../db");

async function seed() {
  const martine = await db.user.create({
    data: {
      pseudo: "Martine",
      email: "matine@lune.com",
      picture: "/martine.png",
      time: "A rejoint Twitter Lunaire en mai 2067",
      hobbies: "Apero",
      abonnements: 56,
      abonnes: 7,
    },
  });

  const flowlence = await db.user.create({
    data: {
      pseudo: "Flowlence",
      email: "flowlence@lune.com",
      picture: "/flowlence.jpg",
      time: "A rejoint Twitter Lunaire en novembre 2202",
      hobbies: "Gin, Blagues",
      abonnements: 230,
      abonnes: 159,
    },
  });

  const astridouille = await db.user.create({
    data: {
      pseudo: "Astridouille",
      email: "astridouille@lune.com",
      picture: "/astridouille.jpg",
      time: "A rejoint Twitter Lunaire en décembre 1932",
      hobbies: "Apero Roller Sport",
      abonnements: 456,
      abonnes: 789,
    },
  });

  const cunegonde = await db.user.create({
    data: {
      pseudo: "Cunégonde",
      email: "cunegonde@lune.com",
      picture: "/astridouille.jpg",
      time: "A rejoint Twitter Lunaire en février 2022",
      hobbies: "Apero PoleDance",
      abonnements: 652,
      abonnes: 1230,
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
        pseudo: "Cunégonde",
        picture: "/cunegonde.jpg",
        content: "La Canicule n'est pas une pratique sexuelle chez les canards",
        date: "11 août 2089",
      },
      {
        pseudo: "Flowlence",
        picture: "/flowlence.jpg",
        content: "C'est un sucre qui va dans un café et plouf",
        date: new Date("43 août 2102"),
      },
    ],
  });

  await db.hashtag.createMany({
    data: [
      {
        hashtag: "#PoleDance",
        number: "67,2k Tweets",
      },
      {
        hashtag: "#Apero",
        number: "2,3m Tweets",
      },
      {
        hashtag: "#OuEstNico",
        number: "213 Tweets",
      },
      {
        hashtag: "#HarryPouetPouet",
        number: "10,4k Tweets",
      },
      {
        hashtag: "#WildCodeSchool",
        number: "2 319 Tweets",
      },
    ],
  });
}

seed();

module.exports = seed;
