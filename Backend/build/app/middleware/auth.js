"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _util = require('util');

exports. default = async (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({
      message: "Token não fornecido!"
    });
  }

  const [, token] = auth.split(" ");


  try {
    const decode = await _util.promisify.call(void 0, _jsonwebtoken2.default.verify)(
      token,
      _auth2.default.secret
    );

    req.userLogin = decode.login;

    return next();

  } catch (error) {
    return res.status(401).json({
      message: "Token inválido"
    });
  }
};
