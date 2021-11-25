import React from "react";
import useStyles from './styles/Instructions.styles'
import demo from './demo/demo.gif'

const Instructions = () => {
  const styles = useStyles();
  return (
    <div className={styles.instructions}>
      <h3 className={styles.header}>How it works..</h3>
      <img className={styles.demo} src={demo} />
      <p>If you make an account with us, you can save your work and see if it made it into our trending NFTs list above!</p>
    </div>
  );
};

export default Instructions;