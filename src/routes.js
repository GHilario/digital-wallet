import { Router } from "express";
import AuthMiddleware from "./app/middleware/auth";
import UsuarioController from "./app/controllers/UsuarioController";
import SessionController from "./app/controllers/SessionController";
import SaldoController from "./app/controllers/SaldoController";
import MovimentacaoController from "./app/controllers/MovimentacaoController";

const routes = new Router();
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

routes.post("/user", UsuarioController.store);

routes.post("/session", SessionController.store);

routes.use(AuthMiddleware);

routes.get("/saldo", SaldoController.show);

routes.post("/movimentacao", MovimentacaoController.store);

routes.get("/movimentacao", MovimentacaoController.index);

export default routes;
