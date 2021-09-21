import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Alert from "../../components/Alert";
import ListTransfer from "../../components/ListTransfer";
import NewTranfer from "../../components/NewTranfer";

function Movimentacao() {
  const [loading, setLoading] = useState(false);
  const [objAlert, setObjAlert] = useState({
    open: false,
    severy: "",
    message: ""
  });
  const [novaMovimentacao, setNovaMovimentacao] = useState(false);

  return (
    <>
      <Alert objAlert={objAlert} setObjAlert={setObjAlert} />
      <Grid container direction="row" justify="center" alignItems="center">
        <ListTransfer
          loading={loading}
          setLoading={setLoading}
          setObjAlert={setObjAlert}
          setNovaMovimentacao={setNovaMovimentacao}
        />
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ paddingTop: "2%" }}
      >
        {novaMovimentacao ? (
          <NewTranfer
            setObjAlert={setObjAlert}
            setOpen={setNovaMovimentacao}
          />
        ) : null}
      </Grid>
    </>
  );
}

export default Movimentacao;
