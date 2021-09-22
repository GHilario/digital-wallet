"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _SaldoService = require('../services/SaldoService'); var _SaldoService2 = _interopRequireDefault(_SaldoService);

class MovimentacaoController {
  async show(req, res) {
    /* 
      #swagger.tags = ['Saldo']
      #swagger.description = 'Endpoint para exibir o saldo de um usuário'
      #swagger.responses[200] = { 
        description: 'Mostra o saldo do usuário',
        schema: {
          $ref: '#/definitions/Saldo'
        }
      }
      #swagger.responses[400] = { 
        description: 'Usuário não possui saldo cadastrado!',
        schema: {
          $ref: '#/definitions/Base'
        }
      }
    */
    const saldo = await _SaldoService2.default.getSaldo(req.userLogin);

    if (saldo.error) {
      return res.status(400).json({
        message: saldo.error
      });
    }

    return res.json(saldo);
  }
}

exports. default = new MovimentacaoController();
