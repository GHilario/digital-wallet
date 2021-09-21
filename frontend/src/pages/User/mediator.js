import * as yup from "yup";
import InstanceAxios from "../../utils/InstanceAxios";
import { requestMessageError } from "../../utils";

export const handleSubmit = async ({
  setLoading,
  login,
  senha,
  nome,
  history,
  setObjAlert
}) => {
  let schema = yup.object().shape({
    login: yup.string().required("Login"),
    senha: yup.string().required("Senha")
  });

  schema
    .validate({
      login,
      senha
    })
    .then(async data => {
      setLoading(true);
      await InstanceAxios()
        .post("/user", {
          login,
          senha,
          nome
        })
        .then(res => {
          history.push("/");
          setLoading(false);
        })
        .catch(err => {
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

export const clickAlert = setObjAlert => {
  setObjAlert({ open: false });
};
