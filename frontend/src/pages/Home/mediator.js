import InstanceAxios from '../../utils/InstanceAxios';
import { requestMessageError } from "../../utils";

export const fetchSaldo = async ({setSaldo, setLoading, setObjAlert}) => {
    setLoading(true);
    await InstanceAxios(localStorage.getItem('toobiauth'))
      .get("/saldo")
      .then(res => {
        setSaldo(res.data.saldo);
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
  }