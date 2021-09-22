"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);
var _Saldo = require('../models/Saldo'); var _Saldo2 = _interopRequireDefault(_Saldo);
var _Movimentacao = require('../models/Movimentacao'); var _Movimentacao2 = _interopRequireDefault(_Movimentacao);
var _sequelize = require('sequelize');

class MovimentacaoService {
  async createMovimentacao(mov) {
    console.log(mov);
    //Checando se o usuario de destino existe
    const usuarioDestino = await _Usuario2.default.findOne({
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
    const saldoUsuarioOrigem = await _Saldo2.default.findOne({
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
    const movimentacao = await _Movimentacao2.default.create(mov).catch(err => {
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
    const saldoUsuarioDestino = await _Saldo2.default.findOne({
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
    const movimentacoes = await _Movimentacao2.default.findAll({
      where: {
        [_sequelize.Op.or]: [{ login_origem: userLogin }, { login_destino: userLogin }]
      },
      include: [
        {
          model: _Usuario2.default,
          as: "LoginOrigem",
          attributes: ["login", "nome"]
        },
        {
          model: _Usuario2.default,
          as: "LoginDestino",
          attributes: ["login", "nome"]
        }
      ],
      order: [["data", "DESC"]]
    });

    return movimentacoes;
  }
}

exports. default = new MovimentacaoService();
