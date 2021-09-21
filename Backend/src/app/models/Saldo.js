import { Model, Sequelize } from "sequelize";

class Saldo extends Model {
  static init(sequelize) {
    super.init(
      {
        login: {
          type: Sequelize.STRING,
          primaryKey: true
        },
        saldo: Sequelize.FLOAT
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

export default Saldo;
