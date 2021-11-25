import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  stencilContainer: {
    height: '40%',
    width: '40%',
    padding: '10px',
    margin: '2px',
    border: '1px solid black',
    borderRadius: '5px'
  },
  stencilImg: {
    height: '150px',
    width: '150px',
    borderRadius: '5px',
    padding: '0 12px'
  },
  stencilTitle: {
    textAlign: 'center'
  }
});

export default useStyles;