"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _yup = require('yup'); var yup = _interopRequireWildcard(_yup);
var _MovimentacaoService = require('../services/MovimentacaoService'); var _MovimentacaoService2 = _interopRequireDefault(_MovimentacaoService);

class MovimentacaoController {
  async store(req, res) {
    /* 
      #swagger.tags = ['Movimentação']
      #swagger.description = 'Endpoint para realizar uma movimentação'
      #swagger.parameters = {
        in:'body',
        description:'Dados para a movimentação',
        required:true,
        schema: {
          $ref: '#/definitions/AddMovimentacao'
        }
      }
      #swagger.responses[200] = { 
        description: 'Movimentação Realizada com Sucesso',
        schema: {
          $ref: '#/definitions/Movimentacao'
        }
      }
      #swagger.responses[400] = { 
        description: 'Parâmetros necessários não enviados ou incorretos',
        schema: {
          $ref: '#/definitions/Base'
        }
      }
      #swagger.responses[500] = { 
        description: 'Erro interno',
        schema: {
          $ref: '#/definitions/Base'
        }
      }
    */
    let schema = yup.object().shape({
      login_destino: yup.string().required("Login Destino"),
      valor_transferido: yup.number().required("Valor Tranferido")
    });

    schema
      .validate(req.body)
      .then(async data => {
        data.login_origem = req.userLogin;
        const movimentacao = await _MovimentacaoService2.default.createMovimentacao(data);

        if (movimentacao.error) {
          return res.status(movimentacao.status).json({
            message: movimentacao.error
          });
        }

        return res.json(movimentacao);
      })
      .catch(err => {
        const message = `Os seguintes campos são necessários:${err.errors.toString()}`;
        return res.status(400).json({
          message
        });
      });
  }

  async index(req, res) {
    /*
      #swagger.tags = ['Movimentação']
      #swagger.description = 'Endpoint para listar as movimentações de um usuário'
      #swagger.responses[200] = { 
        description: 'Lista as movimentações do usuário',
        schema: {
          $ref: '#/definitions/Movimentacao'
        }
      }
    */
    const movimentacao = await _MovimentacaoService2.default.listMovimentacao(
      req.userLogin
    );

    return res.json(movimentacao);
  }
}

exports. default = new MovimentacaoController();
