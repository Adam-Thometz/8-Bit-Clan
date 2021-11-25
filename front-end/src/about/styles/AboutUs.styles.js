import { createUseStyles } from 'react-jss';
import darkPurple from '../../home/background-images/darkPurple.png'

const useStyles = createUseStyles({
  aboutUsWrapper: {
    backgroundImage: `url(${darkPurple})`,
    backgroundPosition: 'bottom',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '105vh',
    color: '#0c1158',
  },
  aboutUs: {
    marginLeft: '100px',
    display: 'flex',
    flexDirection: 'row',
    width: '80%'
  },
  header: {
    textAlign: 'center'
  }
});

export default useStyles;