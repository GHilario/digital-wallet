import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Paper, Grid, Link } from "@material-ui/core";
import Input from "../../components/Input";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import { useAuth } from "../../providers/auth";
import useStyles from "./style";
import { handleSubmit } from "./mediator";

function Login() {
  const classes = useStyles();
  const history = useHistory();
  const { setUser } = useAuth();
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [objAlert, setObjAlert] = useState({
    open: false,
    severy: "",
    message: ""
  });

  return (
    <>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{
          minHeight: "100vh",
          backgroundImage: `url("digital-wallets.jpg")`
        }}
      >
        <Alert objAlert={objAlert} setObjAlert={setObjAlert} />
        <Paper
          elevation={10}
          style={{
            width: "480px",
            backgroundColor: "#FFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 30,
            paddingBottom: 30
          }}
        >
          <form className={classes.form} noValidate>
            <Input
              required={true}
              label="Login"
              disabled={loading}
              text={login}
              setText={setLogin}
            />
            <Input
              required={true}
              label="Senha"
              type="password"
              disabled={loading}
              text={senha}
              setText={setSenha}
            />
            <Button
              fullWidth={true}
              label="Login"
              handleClick={() =>
                handleSubmit({
                  setLoading,
                  setUser,
                  login,
                  senha,
                  history,
                  setObjAlert
                })
              }
              loading={loading}
            />
            <div align="center">
              <Link
                href="/criarUsuario"
                style={{
                  marginTop: 10,
                  color: "#0000EE"
                }}
              >
                Criar Novo Usuário
              </Link>
            </div>
          </form>
        </Paper>
      </Grid>
    </>
  );
}

export default Login;
