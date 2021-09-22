"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Saldo = require('../models/Saldo'); var _Saldo2 = _interopRequireDefault(_Saldo);

class UsuarioService {
  async getSaldo(userLogin) {
    const saldo = await _Saldo2.default.findOne({
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

exports. default = new UsuarioService();
