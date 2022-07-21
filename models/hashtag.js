const db = require("../db");

module.exports.findAllHashtags = () => {
  return db.hashtag.findMany();
};
