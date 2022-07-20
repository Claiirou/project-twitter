import base from "../../../middlewares/common";
import { createTweet, findAllTweets } from "../../../models/tweet";

async function handleGetTweets(req, res) {
  res.send(await findAllTweets());
}

async function handlePostTweet(req, res) {
  const { content, date, userId } = req.body;
  return res.status(201).send(await createTweet({ content, date, userId }));
}

export default base().get(handleGetTweets).post(handlePostTweet);
