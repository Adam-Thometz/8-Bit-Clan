import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  icon: {
    height: '60px',
    width: '60px',
    marginRight: '20px',
    cursor: 'pointer'
  },
  selectedIcon: {
    height: '60px',
    width: '60px',
    marginRight: '20px',
    cursor: 'pointer',
    border: '3px solid white'
  }
});

export default useStyles;