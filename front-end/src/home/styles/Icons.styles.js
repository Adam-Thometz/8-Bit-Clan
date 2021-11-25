import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  allIconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: '0 60px 160px 60px',
    position: 'relative',
    top: '-64px'
  },
  iconWrapper: {
    textAlign: 'center',
    height: '200px',
    width: '200px',
    fontSize: '1.5rem',
    '& p': {
      marginTop: '5%',
      fontSize: '1rem',
      lineHeight: '1.6'
    },
    '& h4': {
      fontFamily: 'proxima-nova, sans-serif',
      margin: '-5%'
    }
  },
  icon: {
    height: '75px',
    width: '75px',
    marginBottom: '50px',
  }
});

export default useStyles;