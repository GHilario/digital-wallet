import Saldo from "../models/Saldo";

class UsuarioService {
  async getSaldo(userLogin) {
    const saldo = await Saldo.findOne({
      where: {
        login: userLogin
      }
    });

    if(!saldo) {
        return {
            error:'Usuário Não possui saldo cadastrado!'
        };
    }

    return saldo;
  }
}

export default new UsuarioService();
