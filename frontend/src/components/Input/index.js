import React from "react";
import { TextField } from "@material-ui/core";
import useStyles from "./style";

function Input({ required, label, type, disabled, text, setText }) {
  const classes = useStyles();
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required={required}
      fullWidth
      label={label}
      disabled={disabled}
      type = { type ? type : '' }
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline
        }
      }}
      InputLabelProps={{
        style: {
          color: "#9e9e9e"
        }
      }}
      autoFocus
      value={text}
      onChange={event => setText(event.target.value)}
    />
  );
}

export default Input;
