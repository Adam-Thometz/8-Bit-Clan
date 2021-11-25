import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  stencilToolbar: {
    backgroundColor: '#3e3e3e',
    width: '98%',
    display: 'flex',
    flexDirection: 'row'
  },
  icon: {
    height: '25px',
    width: '25px',
    marginTop: '15px',
    cursor: 'pointer'
  },
  text: {
    border: 'none',
    margin: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    fontFamily: 'courier',
    color: '#fafafa'
  },
  left: {
    width: '93%',
    display: 'flex',
    flexDirection: 'row'
  },
  right: {
    width: '7%'
  }
})

export default useStyles;