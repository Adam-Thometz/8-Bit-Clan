import React, { useContext } from "react";
import ArtContext from "../utils/ArtContext";
import useStyles from "./styles/Stencil.styles";

const Stencil = ({name, src}) => {
  const {setCurrStencil} = useContext(ArtContext)
  const styles = useStyles();

  const handleChangeStencil = () => {
    setCurrStencil(src);
  }

  return (
    <div className={styles.stencilContainer} onClick={handleChangeStencil}>
      <img className={styles.stencilImg} src={src} alt={name} />
      <p className={styles.stencilTitle}>{name}</p>
    </div>
  );
}

export default Stencil;