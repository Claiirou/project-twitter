import base from "../../../middlewares/common";
import { createTweet, findAllTweets } from "../../../models/tweet";

async function handleGetTweets(req, res) {
  res.send(await findAllTweets({ search: req.query.search }));
}

async function handlePostTweet(req, res) {
  const { pseudo, picture, content, date } = req.body;
  return res
    .status(201)
    .send(await createTweet({ pseudo, picture, content, date }));
}

export default base().get(handleGetTweets).post(handlePostTweet);
