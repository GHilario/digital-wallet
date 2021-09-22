"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _yup = require('yup'); var yup = _interopRequireWildcard(_yup);
var _UsuarioService = require('../services/UsuarioService'); var _UsuarioService2 = _interopRequireDefault(_UsuarioService);

class UsuarioControler {
  async store(req, res) {
    /* 
      #swagger.tags = ['Usuário']
      #swagger.description = 'Endpoint para criar um usuário'
      #swagger.parameters = {
        in:'body',
        description:'Dados do usuário',
        required:true,
        schema: {
          $ref: '#/definitions/Usuario'
        }
      }
      #swagger.responses[400] = { 
        description: 'Parâmetros necessários não enviados ou incorretos',
        schema: {
          $ref: '#/definitions/Base'
        }
      }
      #swagger.responses[500] = { 
        description: 'Erro ao salvar usuário',
        schema: {
          $ref: '#/definitions/Base'
        }
      }
      #swagger.responses[200] = { 
        description: 'Usuário criado com sucesso',
        schema: {
        $ref: '#/definitions/Usuario'
        }
      }
    */
    let schema = yup.object().shape({
      login: yup.string().required("Login"),
      senha: yup.string().required("Senha")
    });

    schema
      .validate(req.body)
      .then(async data => {
        const usuario = await _UsuarioService2.default.createUser(data);

        if (usuario.error) {
          return res.status(500).json({
            message: usuario.error
          });
        }

        return res.json(usuario);
      })
      .catch(err => {
        const message = `Os seguintes campos são necessários:${err.errors.toString()}`;
        return res.status(400).json({
          message
        });
      });
  }
}

exports. default = new UsuarioControler();
