import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  collectionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(12, 17, 88, .2)',
  },
  collectionWindow: {
    overflow: 'scroll',
    height: '25vh',
    width: '50vw',
    textAlign: 'center',
    fontFamily: 'proxima-nova, sans-serif',
    display: 'flex',
    flexDirection: 'rows',
  },
  header: {
    fontFamily: 'proxima-nova, sans-serif',
    textAlign: 'center'
  },
  work: {
    margin: '0 1%'
  }
});

export default useStyles;