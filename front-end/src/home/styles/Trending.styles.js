import { createUseStyles } from "react-jss";
import purpleBlob from '../background-images/purpleBlob.png';

const useStyles = createUseStyles({
  trending: {
    backgroundImage: `url(${purpleBlob})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    position: 'relative',
    top: '-64px',
    paddingTop: '1%'
  },
  trendingList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: '1% 0'
  },
  subTitle: {
    margin: '2%'
  },
  title: {
    margin: '2%',
    fontSize: '2rem',
    fontFamily: 'proxima-nova, sans-serif'
  }
});

export default useStyles