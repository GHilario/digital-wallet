import * as yup from "yup";
import SessionService from "../services/SessionService";

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
        const session = await SessionService.Login(data);

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

export default new SessionController();
