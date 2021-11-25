import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  save: {
    height: '60px',
    width: '60px',
    cursor: 'pointer',
    marginLeft: '45px'
  },
  popup: {
    textAlign: 'center',
    fontFamily: 'proxima-nova, sans-serif',
    height: '30vh',
    width: '50vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    fontSize: '1.5rem'
  },
  saveItem: {
    boxSizing: 'border-box',
    padding: '10px',
    margin: '5px 150px',
    borderRadius: '10px'
  },
  saveBtn: {
    margin: '50px 150px',
    padding: '25px',
    boxSizing: 'border-box',
    fontFamily: 'courier',
    border: '1px solid #d13d79',
    borderRadius: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    fontSize: '1rem'
   },
   messageSuccess: {
    color: 'green'
   },
   messageFail: {
    color: 'red'
   }
});

export default useStyles