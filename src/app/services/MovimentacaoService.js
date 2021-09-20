import Usuario from "../models/Usuario";
import Saldo from "../models/Saldo";
import Movimentacao from "../models/Movimentacao";

class MovimentacaoService {
  async createMovimentacao(mov) {
    console.log(mov);
    //Checando se o usuario de destino existe
    const usuarioDestino = await Usuario.findOne({
      where: {
        login: mov.login_destino
      }
    });
    console.log(usuarioDestino);
    if (!usuarioDestino) {
      return {
        error: "Usuário de Destino não existe",
        status: 400
      };
    }

    //Checando se o valor do usuário de origem é suficiente
    const saldoUsuarioOrigem = await Saldo.findOne({
      where: {
        login: mov.login_origem
      }
    });

    if (saldoUsuarioOrigem.saldo - mov.valor_transferido < 0) {
      return {
        error: "Valor insuficiente para a transferencia",
        status: 400
      };
    }

    //Realizando a transferência
    const movimentacao = await Movimentacao.create(mov).catch(err => {
      console.error(err);
      return null;
    });

    if (!movimentacao) {
      return {
        error: "Erro ao realizar transferencia",
        status: 500
      };
    }

    //Retirando saldo origem
    const updSuo = await saldoUsuarioOrigem
      .update({
        saldo: saldoUsuarioOrigem.saldo - mov.valor_transferido
      })
      .catch(err => {
        console.error(err);
        return null;
      });

    if (!updSuo) {
      await movimentacao.destroy();
      return {
        error: "Erro ao realizar transferencia",
        status: 500
      };
    }

    //Adicionando saldo destino
    const saldoUsuarioDestino = await Saldo.findOne({
      where: {
        login: mov.login_destino
      }
    });

    const updSud = await saldoUsuarioDestino
      .update({
        saldo: saldoUsuarioDestino.saldo + mov.valor_transferido
      })
      .catch(err => {
        console.error(err);
        return null;
      });

    if (!updSud) {
      await movimentacao.destroy();
      await saldoUsuarioOrigem.update({
        saldo: saldoUsuarioOrigem.saldo + mov.valor_transferido
      });

      return {
        error: "Erro ao realizar transferencia",
        status: 500
      };
    }

    return movimentacao;
  }

  async listMovimentacao(userLogin) {
    const movimentacoes = await Movimentacao.findAll({
      where: {
        login_origem: userLogin
      },
      include: [
        {
          model: Usuario,
          as: "LoginOrigem"
        },
        {
          model: Usuario,
          as: "LoginDestino"
        }
      ],
      order: ["data", "DESC"]
    });

    return movimentacoes;
  }
}

export default new MovimentacaoService();
