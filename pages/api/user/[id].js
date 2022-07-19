import base from "../../../middlewares/common";
import { deleteOneUser, getOneUser } from "../../../models/user";

async function handleGetOneUser(req, res) {
  const user = await getOneUser(req.query.id);
  return res.status(201).send(user);
}

async function handleDeleteOneUser(req, res) {
  await deleteOneUser(req.query.id);
  return res.status(204).send();
}

export default base().get(handleGetOneUser).delete(handleDeleteOneUser);
