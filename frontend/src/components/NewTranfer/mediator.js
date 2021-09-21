import * as yup from "yup";
import InstanceAxios from "../../utils/InstanceAxios";
import { requestMessageError } from "../../utils";

export const newMov = async ({
  login,
  valor,
  setObjAlert,
  setOpen,
  setLoading,
  setLogin,
  setValor
}) => {
  let schema = yup.object().shape({
    login: yup.string().required("Login"),
    valor: yup.number().required("Valor").min(1)
  });

  schema
  .validate({
    login,
    valor,
  })
  .then(async data => {
    setLoading(true);
    await InstanceAxios(localStorage.getItem("toobiauth"))
      .post("/movimentacao", {
        login_destino: login,
        valor_transferido: valor
      })
      .then(res => {
        setLogin("");
        setValor(0);
        setObjAlert({
          message: "Nova Tranferência Realizada com Sucesso!",
          open: true,
          severity: "success"
        });
        setLoading(false);
        setOpen(false);
      })
      .catch(err => {
        setLogin("");
        setValor(0);
        setLoading(false);
        setObjAlert({
          message: requestMessageError(err),
          open: true,
          severity: "error"
        });
      });
  })
  .catch(err => {
    setLoading(false);
    setObjAlert({
      message: `Os seguintes campos são necessários:${err.errors.toString()}`,
      open: true,
      severity: "warning"
    });
  });
};
