import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MaterialAlert from "@material-ui/lab/Alert";

function Alert({ objAlert, setObjAlert }) {
  return (
    <Snackbar
      open={objAlert.open}
      autoHideDuration={6000}
      onClose={() => setObjAlert({ open: false, severity: '', message: '' })}
    >
      <MaterialAlert
        severity={objAlert.severity}
        onClose={() => setObjAlert({ open: false, severity: '', message: '' })}
      >
        {objAlert.message}
      </MaterialAlert>
    </Snackbar>
  );
}

export default Alert;
