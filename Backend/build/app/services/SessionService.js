"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);
var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);

class SessionService {
  async Login(dataUser) {
    const { login, senha } = dataUser;
    const usuario = await _Usuario2.default.findOne({
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
      token: _jsonwebtoken2.default.sign({ login }, _auth2.default.secret, {
        expiresIn: _auth2.default.expiresIn
      })
    };
  }
}

exports. default = new SessionService();
