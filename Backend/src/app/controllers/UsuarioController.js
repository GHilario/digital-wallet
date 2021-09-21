import * as yup from "yup";
import UsuarioService from "../services/UsuarioService";

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
          $ref: '#/definitions/Login'
        }
      }
      #swagger.responses[500] = { 
        description: 'Erro ao salvar usuário',
        schema: {
          $ref: '#/definitions/Login'
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
        const usuario = await UsuarioService.createUser(data);

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

export default new UsuarioControler();
