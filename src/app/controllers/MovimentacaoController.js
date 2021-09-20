import * as yup from "yup";
import MovimentacaoService from "../services/MovimentacaoService";

class MovimentacaoController {
  async store(req, res) {
    let schema = yup.object().shape({
      login_destino: yup.string().required("Login Destino"),
      valor_transferido: yup.number().required("Valor Tranferido")
    });

    schema
      .validate(req.body)
      .then(async data => {
        data.login_origem = req.userLogin;
        const movimentacao = await MovimentacaoService.createMovimentacao(data);

        if (movimentacao.error) {
          return res.status(401).json({
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

  async index(req,res) {
    const movimentacao = await MovimentacaoService.listMovimentacao(req.userLogin);

    return res.json(movimentacao);
  }
}

export default new MovimentacaoController();
