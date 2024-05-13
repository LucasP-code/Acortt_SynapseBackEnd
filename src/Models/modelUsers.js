const connection = require("./connection");
const bcrypt = require("bcrypt");

class user {
  constructor(usu_nome, usu_email, usu_senha, usu_tel, facul_id) {
    (this.usu_nome = usu_nome),
      (this.usu_email = usu_email),
      (this.usu_senha = usu_senha),
      (this.usu_tel = usu_tel),
      (this.facul_id = facul_id);
  }
}

const createUser = async (infoUser) => {
  const { usu_nome, usu_email, usu_senha, usu_tel, facul_id } = infoUser;
 
  const query =
    "INSERT INTO Usuarios (usu_nome , usu_email , usu_senha , usu_tel , facul_id) VALUES (?, ?, ?, ?, ?)";
  const newUser = new user(usu_nome, usu_email, usu_senha, usu_tel, facul_id);

  const salt = await bcrypt.genSalt(12);
  const SenhaHash = await bcrypt.hash(usu_senha, salt);
  console.log(usu_nome ,usu_email, SenhaHash, usu_tel, facul_id);

  const [createUser] = await connection.execute(query, [
    newUser.usu_nome,
    newUser.usu_email,
    SenhaHash,
    newUser.usu_tel,
    newUser.facul_id,
  ]);

  return createUser;
};

const getAllInfoUser = async (usu_id) => {
  const query =
    "SELECT usu_nome, usu_email , usu_tel , facul_id FROM Usuarios WHERE usu_id = ?";

  const [InfoUser] = await connection.execute(query, [usu_id]);
  return InfoUser;
};

const getAll = async () => {
  try {
    const query = "SELECT * FROM Usuarios";

    const [users] = await connection.execute(query);
    return users;
  } catch (error) {
    return res.status(500).json({ status: 7 });
  }
};

module.exports = {
  getAll,
  createUser,
  getAllInfoUser,
};
