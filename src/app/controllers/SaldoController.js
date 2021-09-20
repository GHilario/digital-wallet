import SaldoService from "../services/SaldoService";

class MovimentacaoController {
  async show(req, res) {
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
