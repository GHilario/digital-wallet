/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import { formatMoney } from "../../utils";
import Button from "../Button";
import { useAuth } from "../../providers/auth";
import { fetchMov } from "./mediator";

function ListTransfer({ loading, setLoading, setObjAlert, setNovaMovimentacao }) {
  const { user } = useAuth();
  const [movimentacao, setMovimentacao] = useState([]);

  useEffect(() => {
    fetchMov({
      setLoading,
      setMovimentacao,
      setObjAlert
    });
  }, [loading]);

  return (
    <>
      <div>
        <Typography variant="h5" gutterBottom>
          Minhas Transferencias
        </Typography>
        <Button
          fullWidth={true}
          label="Nova Movimentação"
          handleClick={() => setNovaMovimentacao(true)}
          loading={false}
        />
      </div>
      <List
        style={{
          width: "60vh",
          height: "32vh",
          overflow: "scroll",
          overflowX: "hidden"
        }}
      >
        {movimentacao.map(m => (
          <ListItem>
            <ListItemAvatar>
              <Avatar
                style={
                  m.login_origem === user.login
                    ? { backgroundColor: "red" }
                    : { backgroundColor: "green" }
                }
              >
                {m.login_origem === user.login ? (
                  <ArrowUpwardIcon />
                ) : (
                  <ArrowDownwardIcon />
                )}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                m.login_origem === user.login
                  ? m.LoginDestino.nome
                    ? m.LoginDestino.nome
                    : m.LoginDestino.login
                  : m.LoginOrigem.nome
                  ? m.LoginOrigem.nome
                  : m.LoginOrigem.login
              }
              secondary={`${formatMoney(m.valor_transferido)} - ${moment(
                m.data
              ).format("DD/MM/YYYY HH:mm:ss")}`}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListTransfer;
