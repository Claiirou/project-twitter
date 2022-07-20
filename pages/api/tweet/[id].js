import base from "../../../middlewares/common";
import {
  deleteOneTweet,
  getOneTweet,
  patchOneTweet,
} from "../../../models/tweet";

async function handleGetOneTweet(req, res) {
  const tweet = await getOneTweet(req.query.id);
  return res.status(201).send(tweet);
}

async function handleDeleteOneTweet(req, res) {
  await deleteOneTweet(req.query.id);
  return res.status(204).send();
}

async function handlePatchTweet(req, res) {
  const tweetToPatch = await patchOneTweet(req.query.id, req.body);
  return res.status(201).send(tweetToPatch);
}

export default base()
  .get(handleGetOneTweet)
  .delete(handleDeleteOneTweet)
  .patch(handlePatchTweet);
