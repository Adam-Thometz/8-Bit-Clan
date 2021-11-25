import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  teammate: {
    width: '50%',
    margin: '25px',
    fontFamily: 'courier',
    fontSize: '0.7rem'
  },
  pic: {
    height: '250px',
    width: '250px',
    borderRadius: '20px'
  },
  name: {
    margin: '10px 20px 10px 0',
    fontSize: '1.5rem'
  },
  role: {
    margin: '10px 20px 10px 0',
    fontSize: '1rem'
  },
  about: {
    margin: '10px 50px 10px 0',
    fontSize: '0.8rem',
    width: '70%'
  },
  iconWrapper: {
    margin: '25px 0',
    width: '25%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    height: '25px',
    width: '25px'
  }
});

export default useStyles;