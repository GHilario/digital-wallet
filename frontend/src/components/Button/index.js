import React from "react";
import MaterialButton from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import useStyles from "./style";

function Button({ fullWidth, handleClick, label, loading }) {
  const classes = useStyles();
  return loading ? (
    <>
      <MaterialButton
        type="button"
        variant="contained"
        fullWidth={fullWidth}
        className={classes.submit}
        disabled={true}
      >
        <CircularProgress
          size={24}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-12px",
            marginLeft: "-12px"
          }}
        />
      </MaterialButton>
    </>
  ) : (
    <MaterialButton
      type="button"
      variant="contained"
      fullWidth={fullWidth}
      className={classes.submit}
      onClick={handleClick}
    >
      {label}
    </MaterialButton>
  );
}

export default Button;
