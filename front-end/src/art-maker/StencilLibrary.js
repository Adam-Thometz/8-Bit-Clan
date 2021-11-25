import React, { useContext } from "react";
import Popup from "reactjs-popup";
import Stencil from "./Stencil";
import useStyles from "./styles/StencilLibrary.styles";
import ArtContext from "../utils/ArtContext";
import stencils from './stencils/stencilData'
import downArrow from './icons/down-arrow.png'

const StencilLibrary = () => {
  const {setCurrStencil} = useContext(ArtContext)
  const styles = useStyles();

  const handleClearStencil = () => {
    setCurrStencil(null)
  }

  return (
    <Popup trigger={<img className={styles.downArrow} src={downArrow} />} modal>
      <button className={styles.btn} onClick={handleClearStencil}>Clear Stencil</button>
      <div className={styles.stencilLibrary}>
        {stencils.map(s => <Stencil name={s.name} src={s.src} />)}
      </div>
    </Popup>
  )
}

export default StencilLibrary;