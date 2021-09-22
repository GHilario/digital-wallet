"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _yup = require('yup'); var yup = _interopRequireWildcard(_yup);
var _SessionService = require('../services/SessionService'); var _SessionService2 = _interopRequireDefault(_SessionService);

class SessionController {
  async store(req, res) {
    /* 
    #swagger.tags = ['Autenticação']
    #swagger.description = 'Endpoint para autenticar um usuário'
    #swagger.parameters = {
      in:'body',
      description:'Dados para o Login',
      required:true,
      schema: {
        $ref: '#/definitions/Login'
      }
    }
    #swagger.responses[400] = { 
      description: 'Credenciais não fornecidas',
      schema: {
        $ref: '#/definitions/Base'
      }
    }
    #swagger.responses[401] = { 
      description: 'Credenciais invalidas',
      schema: {
        $ref: '#/definitions/Base'
      }
    }
    #swagger.responses[200] = { 
      description: 'Login Realizado com sucesso!',
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
        const session = await _SessionService2.default.Login(data);

        if (session.error) {
          return res.status(401).json({
            message: session.error
          });
        }

        return res.json(session);
      })
      .catch(err => {
        const message = `Os seguintes campos são necessários:${err.errors.toString()}`;
        return res.status(400).json({
          message
        });
      });
  }
}

exports. default = new SessionController();
