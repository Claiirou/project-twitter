const db = require("../db");

module.exports.createTweet = ({ content, date, userId }) => {
  return db.tweet.create({ date: { content, date, userId } });
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
    data: { content: data.content, date: data.date, userId: data.userId },
  });
};

module.exports.deleteOneTweet = async (id) => {
  return await db.tweet.delete({ where: { id: parseInt(id, 10) } });
};
