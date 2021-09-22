"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');
var _p4ssw0rd = require('p4ssw0rd'); var p4ssw0rd = _interopRequireWildcard(_p4ssw0rd);

class Usuario extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        login: {
          type: _sequelize.Sequelize.STRING,
          primaryKey: true
        },
        senha: _sequelize.Sequelize.STRING,
        nome: _sequelize.Sequelize.STRING
      },
      {
        sequelize,
        tableName: "usuario",
        timestamps: false
      }
    );

    this.addHook("beforeSave", async usuario => {
      if (usuario.senha) {
        usuario.senha = p4ssw0rd.hash(usuario.senha);
      }
    });

    return this;
  }

  checkPassword(password) {
    return p4ssw0rd.check(password, this.senha);
  }
}

exports. default = Usuario;
