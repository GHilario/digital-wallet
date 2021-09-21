import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Input from "../../components/Input";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import useStyles from "./style";
import { handleSubmit } from "./mediator";

function Login() {
  const classes = useStyles();
  const history = useHistory();
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(false);
  const [objAlert, setObjAlert] = useState({
    open: false,
    severy: "",
    message: ""
  });

  return (
    <>
      <Alert objAlert={objAlert} setObjAlert={setObjAlert} />
      <div align="center">
        <form className={classes.form} noValidate>
          <Typography variant="h5" gutterBottom>
            Dados do Novo Usuário
          </Typography>
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
          <Input
            required={false}
            label="Nome"
            disabled={loading}
            text={nome}
            setText={setNome}
          />
          <Button
            fullWidth={false}
            label="Salvar"
            handleClick={() =>
              handleSubmit({
                setLoading,
                login,
                senha,
                nome,
                history,
                setObjAlert
              })
            }
            loading={loading}
          />
        </form>
      </div>
    </>
  );
}

export default Login;
