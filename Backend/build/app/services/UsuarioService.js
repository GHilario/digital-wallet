"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);
var _Saldo = require('../models/Saldo'); var _Saldo2 = _interopRequireDefault(_Saldo);

class UsuarioService {
  async createUser(dataUser) {
    //Criando usuario
    const usuario = await _Usuario2.default.create(dataUser).catch(err => {
      console.error(err);
      return null;
    });

    if (!usuario) {
      return {
        error: "Erro ao criar usuario"
      };
    }

    //Iniciando Saldo
    const saldo = await _Saldo2.default.create({
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

exports. default = new UsuarioService();
