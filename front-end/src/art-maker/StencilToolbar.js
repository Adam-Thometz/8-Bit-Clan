import React, { useContext } from "react";
import eyeOpen from './icons/eye-open.png';
import eyeClosed from './icons/eye-closed.png';
import ArtContext from "../utils/ArtContext";
import useStyles from "./styles/StencilToolbar.styles";
import StencilLibrary from './StencilLibrary'

const StencilToolbar = () => {
  const {isShowingStencil, setIsShowingStencil} = useContext(ArtContext);
  const styles = useStyles();

  const toggleStencil = () => {
    setIsShowingStencil(showing => !showing)
  }

  return (
    <div className={styles.stencilToolbar}>
      <div className={styles.left}>
        <p className={styles.text}>Select a stencil</p>
        <img className={styles.icon} src={isShowingStencil ? eyeOpen : eyeClosed} onClick={toggleStencil} />
      </div>
      <div className={styles.right}>
        <StencilLibrary />
      </div>
    </div>
  );
};

export default StencilToolbar;