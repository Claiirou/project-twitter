const db = require("../db");

module.exports.createTweet = ({ pseudo, picture, content, date }) => {
  return db.tweet.create({ data: { pseudo, picture, content, date } });
};

module.exports.findAllTweets = () => {
  return db.tweet.findMany().catch(() => null);
};

module.exports.getOneTweet = async (id) => {
  return await db.tweet
    .findUnique({ where: { id: parseInt(id, 10) } })
    .catch(() => null);
};

module.exports.patchOneTweet = async (id, data) => {
  return await db.tweet.update({
    where: { id: parseInt(id, 10) },
    data: {
      content: data.content,
      date: data.date,
      pseudo: data.pseudo,
      picture: data.picture,
    },
  });
};

module.exports.deleteOneTweet = async (id) => {
  return await db.tweet.delete({ where: { id: parseInt(id, 10) } });
};
