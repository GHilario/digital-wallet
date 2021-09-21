import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Home from "./pages/Home";
import User from "./pages/User";
import Movimentacao from "./pages/Movimentacao";

export default function Routes() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/criarUsuario" exact component={User} />
          <Main>
            <PrivateRoute
              component={({ match }) => (
                <div>
                  <PrivateRoute exact path="/" component={Home} />
                  <PrivateRoute path="/movimentacao" component={Movimentacao} />
                  <PrivateRoute path="/usuario" component={User} />
                </div>
              )}
            />
          </Main>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
