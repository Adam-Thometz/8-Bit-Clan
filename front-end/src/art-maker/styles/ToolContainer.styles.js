import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  toolContainer: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    padding: '0 0 20px 0'
  },
  toolContainerLeft: {
    marginLeft: '10px',
    width: '25%',
    display: "flex",
    flexDirection: 'row',
  },
  toolContainerCenter: {
    width: '75%',
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  toolContainerRight: {
    width: '10%',
    marginRight: '10px'
  }
})

export default useStyles;