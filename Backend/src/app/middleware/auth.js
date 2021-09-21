import AuthConfig from "../../config/auth";
import jsonwebtoken from "jsonwebtoken";
import { promisify } from "util";

export default async (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({
      message: "Token não fornecido!"
    });
  }

  const [, token] = auth.split(" ");


  try {
    const decode = await promisify(jsonwebtoken.verify)(
      token,
      AuthConfig.secret
    );

    req.userLogin = decode.login;

    return next();

  } catch (error) {
    return res.status(401).json({
      message: "Token inválido"
    });
  }
};
