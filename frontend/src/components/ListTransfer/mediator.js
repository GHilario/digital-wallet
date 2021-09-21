import InstanceAxios from "../../utils/InstanceAxios";
import { requestMessageError } from "../../utils";

export const fetchMov = async ({
  setMovimentacao,
  setLoading,
  setObjAlert
}) => {
  setLoading(true);
  await InstanceAxios(localStorage.getItem("toobiauth"))
    .get("/movimentacao")
    .then(res => {
      setMovimentacao(res.data);
      setLoading(false);
    })
    .catch(err => {
      setLoading(false);
      setMovimentacao([]);
      setObjAlert({
        message: requestMessageError(err),
        open: true,
        severity: "error"
      });
    });
};
