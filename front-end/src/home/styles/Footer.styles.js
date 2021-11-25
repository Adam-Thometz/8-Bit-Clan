import { createUseStyles } from "react-jss";
import darkPurple from '../background-images/darkPurple.png';

const useStyles = createUseStyles({
  footer: {
    backgroundImage: `url(${darkPurple})`,
    backgroundPosition: 'bottom',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '17rem',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative'
  },
  text: {
    color: '#fafafa',
    position: 'absolute',
    bottom: '10%',
    left: '10%',
    '& a': {
      textDecoration: 'none',
      color: '#fafafa'
    }
  },
  icon: {
    height: '250px',
    position: 'absolute',
    right: '10%'
  }
});

export default useStyles