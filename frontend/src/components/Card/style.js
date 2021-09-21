import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      overflow: "hidden",
      width: "95%",

    },
    card: {
      width: '40vh',
      height:'20vh',
      textAlign: 'center',
      backgroundColor:'#FFFAF0'
    },
  }));

  export default useStyles;