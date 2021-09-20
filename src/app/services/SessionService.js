import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario";
import auth from "../../config/auth";

class SessionService {
  async Login(dataUser) {
    const { login, senha } = dataUser;
    const usuario = await Usuario.findOne({
      where: {
        login
      }
    });

    if (!usuario) {
      return {
        error: "Usuário não encontrado!"
      };
    }

    if (!(await usuario.checkPassword(senha))) {
      return {
        error: "Senha não esta correta!"
      };
    }

    const { nome } = usuario;

    return {
      usuario: {
        nome,
        login
      },
      token: jwt.sign({ login }, auth.secret, {
        expiresIn: auth.expiresIn
      })
    };
  }
}

export default new SessionService();
