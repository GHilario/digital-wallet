import SaldoService from "../services/SaldoService";

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
    const saldo = await SaldoService.getSaldo(req.userLogin);

    if (saldo.error) {
      return res.status(400).json({
        message: saldo.error
      });
    }

    return res.json(saldo);
  }
}

export default new MovimentacaoController();
