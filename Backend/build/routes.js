"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _auth = require('./app/middleware/auth'); var _auth2 = _interopRequireDefault(_auth);
var _UsuarioController = require('./app/controllers/UsuarioController'); var _UsuarioController2 = _interopRequireDefault(_UsuarioController);
var _SessionController = require('./app/controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _SaldoController = require('./app/controllers/SaldoController'); var _SaldoController2 = _interopRequireDefault(_SaldoController);
var _MovimentacaoController = require('./app/controllers/MovimentacaoController'); var _MovimentacaoController2 = _interopRequireDefault(_MovimentacaoController);

const routes = new (0, _express.Router)();
routes.get("/", (req, res) => {
  /* 
    #swagger.tags = ['Verificação']
    #swagger.description = 'Endpoint para testar se o servidor está online'
    #swagger.responses[200] = { 
      description: 'Mensagem de Ok!',
      schema: {
        $ref: '#/definitions/Base'
      }
    }
  */
  return res.json({
    message: "Server Online!"
  });
});

routes.post("/user", _UsuarioController2.default.store);

routes.post("/session", _SessionController2.default.store);

routes.use(_auth2.default);

routes.get("/saldo", _SaldoController2.default.show);

routes.post("/movimentacao", _MovimentacaoController2.default.store);

routes.get("/movimentacao", _MovimentacaoController2.default.index);

exports. default = routes;
