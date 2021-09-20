import Usuario from "../models/Usuario";
import Saldo from "../models/Saldo";

class UsuarioService {
  async createUser(dataUser) {
    //Criando usuario
    const usuario = await Usuario.create(dataUser).catch(err => {
      console.error(err);
      return null;
    });

    if (!usuario) {
      return {
        error: "Erro ao criar usuario"
      };
    }

    //Iniciando Saldo
    const saldo = await Saldo.create({
      login: usuario.login,
      saldo: 100
    }).catch(err => {
      console.error(err);
      return null;
    });

    if (!saldo) {
      //Removendo usuario
      await usuario.destroy();

      return {
        error: "Erro ao criar saldo"
      };
    }

    return usuario;
  }
}

export default new UsuarioService();
