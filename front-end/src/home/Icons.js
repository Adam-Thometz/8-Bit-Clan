import React from "react";
import useStyles from "./styles/Icons.styles";

// icons
import dino from './icons/dino.png';
import pencil from './icons/pencil.png';
import save from './icons/save.png';

const Icons = () => {
  const styles = useStyles();
  return (
    <div className={styles.allIconsContainer}>
      <div className={styles.iconWrapper}>
        <img className={styles.icon} src={dino} />
        <h4>Pick</h4>
        <p>Choose a stencil to start with</p>
      </div>
      <div className={styles.iconWrapper}>
        <img className={styles.icon} src={pencil} />
        <h4>Create</h4>
        <p>Design art and express your full creativity</p>
      </div>
      <div className={styles.iconWrapper}>
        <img className={styles.icon} src={save} />
        <h4>Save</h4>
        <p>Create an account and save your work to build a unique collection</p>
      </div>
    </div>
  );
};

export default Icons;