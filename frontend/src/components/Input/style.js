
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "#8d8d8e",
    },
  },
  cssFocused: {},
  notchedOutline: {},
  }));

export default useStyles;