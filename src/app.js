import "./database";
import express from "express";
import routes from "./routes";
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import swaggerFile from "/home/gabriel/projetos/digital-wallet/swagger_output.json";

class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
    this.server.use("/", routes);
  }
}

export default new App().server;