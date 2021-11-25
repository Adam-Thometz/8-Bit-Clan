import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  canvas: {
    display: 'grid',
    width: '15vw',
    height: '15vh',
    gridTemplateRows: 'repeat(50, 1fr)',
    gridTemplateColumns: 'repeat(50, 1fr)',
    borderRadius: '20px',
    // padding: '5% 0',
    backgroundColor: 'white'
  },
  pixel: {
    border: '1px solid rgba(0, 0, 0, 0.1)'
  },
  title: {
    textAlign: 'center'
  },
  author: {
    textAlign: 'center'
  }
});

export default useStyles;