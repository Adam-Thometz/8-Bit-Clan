import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  stencilLibrary: {
    overflow: "scroll",
    height: "10%",
    width: "100%",
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'courier'
  },
  downArrow: {
    height: "50px",
    width: "50px",
    marginTop: '5px',
    cursor: 'pointer'
  },
  btn: {
    textAlign: 'center',
    border: 'none',
    backgroundColor: 'white',
    cursor: 'pointer'
  }
});

export default useStyles;