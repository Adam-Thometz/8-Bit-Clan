import React from "react";
import useStyles from "./styles/Conclusion.styles";

const Conclusion = () => {
  const styles = useStyles();
  return (
    <div className={styles.conclusion}>
      <h3 className={styles.header}>Ready to make your digital mark?</h3>
      <a className={styles.mainBtn} href="/make">Start creating</a>
    </div>
  );
};

export default Conclusion;