import React, { useContext } from "react";
import ArtContext from "../utils/ArtContext";
import useStyles from "./styles/ColorSwatch.styles";
import circle from './icons/circle.png'

const ColorSwatch = () => {
  const {colorSwatch, setCurrColor} = useContext(ArtContext)
  const styles = useStyles();

  return (
    <div className={styles.colorSwatchContainer}>
      {colorSwatch.map((color) => (
        <div className={styles.colorSwatchBorder} onClick={() => setCurrColor(color)}>
          <img src={circle} />
          <div className={styles.colorSwatch} style={{background: color}}></div>
        </div>
      ))}
    </div>
  );
};

export default ColorSwatch;