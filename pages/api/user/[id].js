import base from "../../../middlewares/common";
import { deleteOneUser, getOneUser, patchOneUser } from "../../../models/user";

async function handleGetOneUser(req, res) {
  const user = await getOneUser(req.query.id);
  return res.status(201).send(user);
}

async function handleDeleteOneUser(req, res) {
  await deleteOneUser(req.query.id);
  return res.status(204).send();
}

async function handlePatch(req, res) {
  const userToPatch = await patchOneUser(req.query.id, req.body);
  return res.status(201).send(userToPatch);
}

export default base()
  .get(handleGetOneUser)
  .delete(handleDeleteOneUser)
  .patch(handlePatch);
