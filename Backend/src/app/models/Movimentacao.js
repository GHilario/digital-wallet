import { Model, Sequelize } from "sequelize";

class Movimentacao extends Model {
  static init(sequelize) {
    super.init(
      {
        id_transacao: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        data: {
          type: "TIMESTAMP"
        },
        login_origem: Sequelize.STRING,
        login_destino: Sequelize.STRING,
        valor_transferido: Sequelize.FLOAT
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

export default Movimentacao;
