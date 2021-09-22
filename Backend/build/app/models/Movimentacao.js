"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

class Movimentacao extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_transacao: {
          type: _sequelize.Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        data: {
          type: "TIMESTAMP"
        },
        login_origem: _sequelize.Sequelize.STRING,
        login_destino: _sequelize.Sequelize.STRING,
        valor_transferido: _sequelize.Sequelize.FLOAT
      },
      {
        sequelize,
        tableName: "movimentacao",
        timestamps: false
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuario, {
      as: "LoginOrigem",
      foreignKey: "login_origem"
    });
    this.belongsTo(models.Usuario, {
      as: "LoginDestino",
      foreignKey: "login_destino"
    });
  }
}

exports. default = Movimentacao;
