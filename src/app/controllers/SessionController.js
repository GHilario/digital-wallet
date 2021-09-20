import * as yup from "yup";
import SessionService from "../services/SessionService";

class SessionController {
  async store(req, res) {
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
