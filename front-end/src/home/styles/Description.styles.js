import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  descriptionWrapper: {
    position: 'relative',
    top: '-114px'
  },
  description: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '100px',
    paddingTop: '25px'
  },
  descriptionText: {
    width: '30%',
    fontSize: '1.5rem',
    '& h3': {
      fontFamily: 'proxima-nova, sans-serif'
    },
    '& p': {
      marginTop: '20px',
      fontSize: '1rem',
      lineHeight: '1.6'
    }
  },
  donutNyanCat: {
    width: '400px',
    height: '200px',
    position: 'absolute',
    right: 0
  },
  bomb: {
    marginTop: '100px',
    width: '100px',
    height: '100px',
  },
  pizza: {
    marginRight: '150px',
    width: '200px',
    height: '200px',
  },
  people: {
    width: '500px',
    height: '300px',
  }
});

export default useStyles