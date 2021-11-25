import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  conclusion: {
    textAlign: 'center',
    margin: '30px',
    fontFamily: 'proxima-nova, sans-serif'
  },
  header: {
    margin: '8% 0 4% 0',
    fontSize: '2rem'
  },
  mainBtn: {
    backgroundColor: '#d13d79',
    color: 'white',
    padding: '15px',
    borderRadius: '20px',
    textDecoration: 'none'
  }
});

export default useStyles;