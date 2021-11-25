import { createUseStyles } from 'react-jss';
import pinkBlob from '../background-image/pink-blob.png'

const useStyles = createUseStyles({
  artMakerWrapper: {
    backgroundImage: `url(${pinkBlob})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    height: '1000px',
    width: '100vw',
    zIndex: -5,
    margin: '0 auto',
  },
  artMaker: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5c5c5c',
    borderRadius: '20px',
    padding: '40px 40px',
    margin: '0 100px 100px 100px'
  },
  message: {
    fontFamily: 'courier',
    color: '#fafafa',
    padding: '10px',
    marginTop: '20px'
  }
});

export default useStyles;