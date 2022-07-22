import base from "../../../middlewares/common";
import { createUser, findAllUsers } from "../../../models/user";

async function handleGetUsers(req, res) {
  res.send(await findAllUsers({ search: req.query.search }));
}

async function handlePostUser(req, res) {
  const { pseudo, email, picture } = req.body;
  return res.status(201).send(await createUser({ pseudo, email, picture }));
}

export default base().get(handleGetUsers).post(handlePostUser);
