import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Usuario from '../app/models/Usuario';
import Saldo from '../app/models/Saldo';
import Movimentacao from '../app/models/Movimentacao';

const models = [
    Usuario,
    Saldo,
    Movimentacao,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();