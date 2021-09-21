import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Alert from "../../components/Alert";
import Card from "../../components/Card";
import { fetchSaldo } from "./mediator";
import { formatMoney } from "../../utils";

function Home() {
  const [saldo, setSaldo] = useState(0);
  const [loading, setLoading] = useState(false);
  const [objAlert, setObjAlert] = useState({
    open: false,
    severy: "",
    message: ""
  });

  useEffect(() => {
    fetchSaldo({ setSaldo, setLoading, setObjAlert });
  }, []);

  return (
    <>
      <Alert objAlert={objAlert} setObjAlert={setObjAlert} />
      <Grid container direction="row" justify="center" alignItems="center">
        <Card title="Meu Saldo" value={formatMoney(saldo)} loading={loading} />
      </Grid>
    </>
  );
}

export default Home;
