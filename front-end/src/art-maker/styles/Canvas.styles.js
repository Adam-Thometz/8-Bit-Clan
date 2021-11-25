import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  canvas: {
    display: 'grid',
    height: '750px',
    width: '98%',
    gridTemplateRows: 'repeat(50, 1fr)',
    gridTemplateColumns: 'repeat(50, 1fr)',
    border: '1px solid black',
    backgroundColor: 'white',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'bottom center',
    overflow: "hidden",
  },
  pixel: {
    border: '1px solid rgba(0, 0, 0, 0.2)',
    cursor: 'crosshair',
  }
});

export default useStyles;