"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});require('./database');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _swaggeruiexpress = require('swagger-ui-express'); var _swaggeruiexpress2 = _interopRequireDefault(_swaggeruiexpress);
const swaggerFile = require(`../swagger_output.json`);
var _child_process = require('child_process');

class App {
  constructor() {
    this.database();
    this.server = _express2.default.call(void 0, );
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(_cors2.default.call(void 0, ));
    this.server.use(_express2.default.json());
  }

  routes() {
    this.server.use("/doc", _swaggeruiexpress2.default.serve, _swaggeruiexpress2.default.setup(swaggerFile));
    this.server.use("/", _routes2.default);
  }

  database() {
    _child_process.exec.call(void 0, "npx sequelize db:migrate", (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
    });
  }
}

exports. default = new App().server;
