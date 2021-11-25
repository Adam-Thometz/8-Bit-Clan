import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  colorSwatchContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  colorSwatchBorder: {
    margin: '0 -20px 0 0',
    borderRadius: '12px',
    display: 'inline-block',
    width: '60px',
    height: '60px',
    cursor: 'pointer',
    zIndex: 1
  },
  colorSwatch: {
    position: 'relative',
    width: '83%',
    height: '83%',
    top: '-108%',
    left: '21%',
    borderRadius: '30px',
    zIndex: -1
  }
});

export default useStyles;