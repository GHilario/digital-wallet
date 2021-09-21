import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Input from "../Input";
import Button from "../Button";
import useStyles from "./style";
import { newMov } from "./mediator";

function NewTranfer({ setOpen, setObjAlert }) {
  const classes = useStyles();
  const [login, setLogin] = useState("");
  const [valor, setValor] = useState(0);
  const [loading, setLoading] = useState(false);
  return (
    <div className={classes.container}>
      <Typography variant="h6" gutterBottom>
        Nova Transferência
      </Typography>
      <Input
        required={true}
        label="Login Destino"
        disabled={loading}
        text={login}
        setText={setLogin}
      />
      <Input
        required={true}
        label="Valor"
        type="Number"
        disabled={loading}
        text={valor}
        setText={setValor}
      />
      <Button
        fullWidth={true}
        label="Enviar"
        handleClick={() =>
          newMov({
            login,
            valor,
            setObjAlert,
            setOpen,
            setLoading,
            setLogin,
            setValor
          })
        }
        loading={false}
      />
    </div>
  );
}

export default NewTranfer;
