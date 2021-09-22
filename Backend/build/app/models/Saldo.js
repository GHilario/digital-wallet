"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

class Saldo extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        login: {
          type: _sequelize.Sequelize.STRING,
          primaryKey: true
        },
        saldo: _sequelize.Sequelize.FLOAT
      },
      {
        sequelize,
        tableName: "saldo",
        timestamps: false
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: "login" });
  }
}

exports. default = Saldo;
