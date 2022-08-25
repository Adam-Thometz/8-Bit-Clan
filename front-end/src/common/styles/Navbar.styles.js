import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    position: 'relative',
    margin: '50px',
    marginTop: '20px',
    zIndex: 1,
    fontFamily: 'courier',
  },
  item: {
    padding: '21px',
    fontFamily: 'Courier',
    color: '#0c1158',
    textDecoration: 'none'
  },
  logo: {
    width: '175px',
    height: '60px'
  },
  mainBtn: {
    border: '1px solid #d13d79',
    padding: '15px 21px',
    borderRadius: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    marginRight: '20px',
    fontFamily: 'courier',
    cursor: 'pointer'
  },
  dropDown: {
    textAlign: 'center',
    fontFamily: 'courier',
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  formGroup: {
    textAlign: 'left',
    margin: '5px 15px'
  },
  formInput: {
    boxSizing: 'border-box',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '10px'
  },
  menuItem: {
    cursor: 'pointer'
  },
  authBtn: {
    padding: '3% 30%',
    border: '1px solid #d13d79',
    color: '#d13d79',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    fontFamily: 'courier',
    cursor: 'pointer'
  },
  or: {
    fontFamily: 'proxima-nova, sans-serif',
    fontSize: '0.8rem'
  },
  changeAuthBtn: {
    fontFamily: 'courier',
    fontSize: '0.7rem',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    cursor: 'pointer'
  },
  loginInfo: {
    fontFamily: 'courier',
    textAlign: 'center'
  }
});

export default useStyles;