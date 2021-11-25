import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  instructions: {
    margin: '-20% 5% 5% 5%',
    textAlign: 'center'
  },
  header: {
    fontSize: '2rem',
    textAlign: 'left',
    marginLeft: '7%',
    fontFamily: 'proxima-nova, sans-serif'
  },
  demo: {
    height: '75vh',
    width: '75vw',
    margin: '0 7% 7% 7%'
  }
});

export default useStyles;