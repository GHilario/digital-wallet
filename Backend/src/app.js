import "./database";
import express from "express";
import routes from "./routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
const swaggerFile = require(`../swagger_output.json`);
import { exec } from "child_process";

class App {
  constructor() {
    this.database();
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

  database() {
    exec("yarn migrate", (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
    });
  }
}

export default new App().server;
