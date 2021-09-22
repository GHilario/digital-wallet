"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Usuario = require('../app/models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);
var _Saldo = require('../app/models/Saldo'); var _Saldo2 = _interopRequireDefault(_Saldo);
var _Movimentacao = require('../app/models/Movimentacao'); var _Movimentacao2 = _interopRequireDefault(_Movimentacao);

const models = [
    _Usuario2.default,
    _Saldo2.default,
    _Movimentacao2.default,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new (0, _sequelize2.default)(_database2.default);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

exports. default = new Database();