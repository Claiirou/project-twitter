import base from "../../../middlewares/common";
import { findAllHashtags } from "../../../models/hashtag";

async function handleGetHashtags(req, res) {
  res.send(await findAllHashtags());
}

export default base().get(handleGetHashtags);
