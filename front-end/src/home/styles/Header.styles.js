import { createUseStyles } from "react-jss";
import blueBlob from '../background-images/blueBlob.png';

const useStyles = createUseStyles({
  header: {
    backgroundImage: `url(${blueBlob})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    width: '100%',
    height: '85%',
    display: "flex",
    flexDirection: 'row',
    position: 'relative',
    top: '-114px'
  },
  subHeader: {
    margin: '10% 5% 5% 10%',
    width: '500px',
    height: '500px',
    textAlign: 'left',
    '& h1': {
      lineHeight: '70px',
      letterSpacing: '0.5px',
      fontFamily: 'proxima-nova, sans-serif'
    },
    '& h5': {
      margin: '10% 0',
      fontSize: '1rem'
    }
  },
  mainBtn: {
    backgroundColor: '#d13d79',
    color: 'white',
    padding: '20px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontFamily: 'proxima-nova, sans-serif'
  },
  images1: {
    margin: '12% 0 5% 0'
  },
  images2: {
    margin: '22% 0 5% 0',
    position: 'absolute',
    top: '14%',
    left: '47%',
  },
  cat: {
    width: '75px',
    height: '65px',
    marginRight: '20rem',
    zIndex: 99
  },
  coolBoy: {
    width: '75px',
    height: '150px',
    zIndex: 99
  },
  bitCoins: {
    width: '100px',
    height: '100px',
    zIndex: 99
  },
  artMaker: {
    width: '600px',
    height: '400px',
    zIndex: 98,
    borderRadius: '20px'
  }
});

export default useStyles;