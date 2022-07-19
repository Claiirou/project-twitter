import base from "../../../middlewares/common";
import { findAllUsers } from "../../../models/user";

async function handleGetUsers(req, res) {
  res.send(await findAllUsers());
}

export default base().get(handleGetUsers);
