import { Model, Sequelize } from "sequelize";
import * as p4ssw0rd from "p4ssw0rd";

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        login: {
          type: Sequelize.STRING,
          primaryKey: true
        },
        senha: Sequelize.STRING,
        nome: Sequelize.STRING
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

export default Usuario;
