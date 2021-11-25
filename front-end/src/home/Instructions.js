import React from "react";
import useStyles from './styles/Instructions.styles'
import demo from './demo/demo.gif'

const Instructions = () => {
  const styles = useStyles();
  return (
    <div className={styles.instructions}>
      <h3 className={styles.header}>How it works..</h3>
      <img className={styles.demo} src={demo} />
    </div>
  );
};

export default Instructions;