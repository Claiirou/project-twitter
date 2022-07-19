const db = require("../db");

module.exports.createUser = ({ pseudo, email, picture }) => {
  return db.user.create({ data: { pseudo, email, picture } });
};

module.exports.findAllUsers = () => {
  return db.user
    .findMany({
      include: {
        tweet,
      },
    })
    .catch(() => null);
};

module.exports.getOneUser = async (id) => {
  return await db.user
    .findUnique({ where: { id: parseInt(id, 10) } })
    .catch(() => null);
};

module.exports.patchOneUser = async (id, data) => {
  return await db.user
    .update({
      where: { id: parseInt(id, 10) },
      data: { pseudo: data.pseudo, email: data.email, picture: data.picture },
    })
    .catch(() => null);
};

module.exports.deleteOneUser = async (id) => {
  return await db.user.delete({ where: { id: parseInt(id, 10) } });
};
